import { Module, Injectable, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ScheduleModule, Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
class TasksService {
	private readonly logger = new Logger(TasksService.name);

	constructor(private schedulerRegistry: SchedulerRegistry) {
		// add dynamic (process.env instead of seconds?)
		this.addCronJob('dziczek', '10');

		// log all
		this.getCronJobs();

		// stop (to start again later?)
		this.stopCronJob('dziczek')
	}

	@Cron(CronExpression.EVERY_30_SECONDS)
	handleCron() {
		this.logger.debug('Called every 30 seconds');
	}

	addCronJob(name: string, seconds: string) {
		const job = new CronJob(`*/${seconds} * * * * *`, () => {
			this.logger.warn(`time (${seconds}) for job ${name} to run!`);
		});

		this.schedulerRegistry.addCronJob(name, job);
		job.start();

		this.logger.warn(`job ${name} added - ${seconds} seconds!`);
	}

	getCronJobs() {
		const jobs = this.schedulerRegistry.getCronJobs();

		jobs.forEach((value, key, map) => {
			console.log(`CronJob: ${key} \n nextRun: ${value.nextDate()}`);
		})
	}

	stopCronJob(name: string) {
		this.schedulerRegistry.deleteCronJob(name)
	}
}

@Module({
	imports: [
		ScheduleModule.forRoot()
	],
	providers: [
		TasksService
	]
})
class AppModule { }

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.init();
	Logger.log(`🚀 Application is running`);
}

bootstrap();
