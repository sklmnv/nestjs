import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../task.model";

export class GetTasksFilterDro {
    @IsOptional()
    @IsEnum(TaskStatus)
    status: TaskStatus;
    @IsOptional()
    @IsString()
    search?: string;
}