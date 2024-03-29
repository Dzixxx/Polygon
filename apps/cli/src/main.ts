import 'reflect-metadata';

import { CommandFactory } from 'nest-commander';
import { AppModule } from './app/app.module';

async function bootstrap() {
  await CommandFactory.run(AppModule);
}

void bootstrap();