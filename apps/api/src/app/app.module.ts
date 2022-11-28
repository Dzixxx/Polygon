import { Module } from '@nestjs/common';
import { NATSClientModule } from '@polygon/shared-backend/feature-nats';
import { RedisClientModule } from '@polygon/shared-backend/feature-redis';

import { AppController } from './app.controller';

@Module({
  imports: [RedisClientModule, NATSClientModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
