import { Controller } from '@nestjs/common';
import { Transport, MessagePattern, Payload, Ctx, RedisContext, EventPattern, NatsContext } from '@nestjs/microservices';
import { NATSClientService } from '@polygon/microservice-shared/feature-nats';
import { RedisClientService } from '@polygon/microservice-shared/feature-redis';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly redisClient: RedisClientService,
    private readonly natsClient: NATSClientService,
  ) {
    // redis checks
    setTimeout(() => firstValueFrom(this.redisClient.emit('redis-emit', 'Dziczek')).then(v => console.log('Emit R', v)), 100);
    setTimeout(() => firstValueFrom(this.redisClient.send('redis-send', 'Dziczek')).then(v => console.log('Send R', v)), 100);

    // nats checks
    setTimeout(() => firstValueFrom(this.natsClient.emit('nats-emit', 'Dziczek')).then(v => console.log('Emit N', v)), 1000);
    setTimeout(() => firstValueFrom(this.natsClient.send('nats-send', 'Dziczek')).then(v => console.log('Send N', v)), 1000);
  }

  @EventPattern('redis-emit', { transport: Transport.REDIS })
  checkRedisEmit(
    @Payload() data: unknown,
    @Ctx() context: RedisContext
  ) {
    console.log(data, context);
    return 'yup';
  }

  @MessagePattern('redis-send', { transport: Transport.REDIS })
  checkRedisSend(
    @Payload() data: unknown,
    @Ctx() context: RedisContext
  ) {
    console.log(data, context);
    return 'yup';
  }

  @EventPattern('nats-emit', { transport: Transport.NATS })
  checkNATSEmit(
    @Payload() data: unknown,
    @Ctx() context: NatsContext
  ) {
    console.log(data, context);
    return 'yup';
  }

  @MessagePattern('nats-send', { transport: Transport.NATS })
  checkNATSSend(
    @Payload() data: unknown,
    @Ctx() context: NatsContext
  ) {
    console.log(data, context);
    return 'yup';
  }
}

/**
 * Logger decorator (monitoring stack?)
 * NestJS (serializer/deserializer + headers support)
 * 
 * Storybook
 * Styleguide?
 * 
 * Nx structure of libraries
 * 
 */