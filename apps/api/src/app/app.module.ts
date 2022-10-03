import { Module } from '@nestjs/common';
import { NATSClientModule } from '@polygon/microservice-shared/feature-nats';
import { RedisClientModule } from '@polygon/microservice-shared/feature-redis';

import { AppController } from './app.controller';

@Module({
  imports: [RedisClientModule, NATSClientModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
