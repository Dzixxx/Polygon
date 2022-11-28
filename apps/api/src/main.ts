/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { connectNATS } from '@polygon/shared-backend/feature-nats';

import { connectRedis } from '@polygon/shared-backend/feature-redis';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  connectRedis(app);
  connectNATS(app);

  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 3333);
  
  Logger.log('🚀 Application is running');

  app.enableShutdownHooks();
}

bootstrap();
