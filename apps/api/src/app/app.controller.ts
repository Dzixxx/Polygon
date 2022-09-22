import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}

/**
 * Logger decorator (monitoring stack?)
 * NestJS (serializer/deserializer + headers support)
 * BetterSqlite3 + Postgres + Redis
 * 
 * Storybook
 * Styleguide?
 * 
 * Nx structure of libraries
 * 
 */