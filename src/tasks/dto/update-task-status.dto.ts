import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.status.enum.ts';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
