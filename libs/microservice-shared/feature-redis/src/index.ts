import { INestApplication, Inject, Injectable, Module, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";
import { RedisOptions, Transport, ClientsModule, ClientProxy } from '@nestjs/microservices';
import { timeout } from "rxjs";

const RedisClientToken = Symbol('RedisClient');
const REDIS_TIMEOUT = 3000;

// TODO common serializer to align with NATS

export const connectRedis = (app: INestApplication) => {
  app.connectMicroservice<RedisOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379
    }
  });
} 

@Injectable()
export class RedisClientService {
  constructor(@Inject(RedisClientToken) private readonly redisClient: ClientProxy) {}

  send(pattern: string, data: unknown) {
    return this.redisClient.send(pattern, data)
      .pipe(timeout(REDIS_TIMEOUT))
  }

  emit(pattern: string, data: unknown) {
    return this.redisClient.emit(pattern, data)
  }
}

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RedisClientToken,
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        }
      },
    ]),
  ],
  providers: [RedisClientService],
  exports: [RedisClientService]
})
export class RedisClientModule implements OnApplicationBootstrap, OnApplicationShutdown {

  constructor(@Inject(RedisClientToken) private readonly redisClient: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.redisClient.connect();
  }

  async onApplicationShutdown() {
    await this.redisClient.close();
  }
}
