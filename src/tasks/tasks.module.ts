import { Module } from '@nestjs/common';
import { tasksContronller } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [tasksContronller],
  providers: [TasksService],
})
export class TasksModule {}
