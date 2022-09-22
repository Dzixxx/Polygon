import { Command, CommandRunner, Option } from 'nest-commander';
import { BadRequestException, Logger, Module } from '@nestjs/common';

@Command({
  name: 'dziczek',
  aliases: ['dz'],
  description: 'Test dziczek description',
})
class DziczekCmdRunner extends CommandRunner {
  constructor() {
    super();
  }

  async run(argv: string[], options?: Record<string, any>): Promise<void> {
    Logger.log({ argv, options });
  }

  @Option({
    flags: '-i, --identifier <id>',
    description: 'Boar ID',
    required: true,
  })
  handleBoarId(id: string) {
    return id;
  }

  @Option({
    flags: '-s, --size <large|small>',
    choices: ['large', 'small'],
    description: 'Boar size',
  })
  handleBoarSize(size: string) {
    // place for validation of each param (worth to implement validation decorator)
    throw new BadRequestException('Provided size is invalid (please look at \'choices\' section)');
  }
}

@Module({
imports: [],
providers: [DziczekCmdRunner],
})
export class AppModule {}
  