import { INestApplication, Inject, Injectable, Module, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";
import { Transport, ClientsModule, ClientProxy, NatsOptions } from '@nestjs/microservices';
import { timeout } from "rxjs";

const NATSClientToken = Symbol('NatsClient');
const NATS_TIMEOUT = 3000;

// TODO common serializer to align with Redis

export const connectNATS = (app: INestApplication) => {
  app.connectMicroservice<NatsOptions>({
    transport: Transport.NATS,
    options: {
      servers: ['nat://localhost:4222'],
    }
  });
} 

@Injectable()
export class NATSClientService {
  constructor(@Inject(NATSClientToken) private readonly natsClient: ClientProxy) {}

  send(pattern: string, data: unknown) {
    return this.natsClient.send(pattern, data)
      .pipe(timeout(NATS_TIMEOUT))
  }

  emit(pattern: string, data: unknown) {
    return this.natsClient.emit(pattern, data)
  }
}

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATSClientToken,
        transport: Transport.NATS,
        options: {
          servers: ['nat://localhost:4222'],
        }
      },
    ]),
  ],
  providers: [NATSClientService],
  exports: [NATSClientService]
})
export class NATSClientModule implements OnApplicationBootstrap, OnApplicationShutdown {

  constructor(@Inject(NATSClientToken) private readonly natsClient: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.natsClient.connect();
  }

  async onApplicationShutdown() {
    await this.natsClient.close();
  }
}
