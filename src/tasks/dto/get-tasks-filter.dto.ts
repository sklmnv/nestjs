import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../task-status.enum";

export class GetTasksFilterDro {
    @IsOptional()
    @IsEnum(TaskStatus)
    status: TaskStatus;
    @IsOptional()
    @IsString()
    search?: string;
}