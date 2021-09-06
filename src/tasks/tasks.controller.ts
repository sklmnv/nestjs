import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { title } from 'process';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.tdo';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/upda-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() getTasksFilterDro: GetTasksFilterDto): Promise<Task[]> {
        return this.tasksService.getTasks(getTasksFilterDro);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
        return this.tasksService.createTask(createTaskDto);
    }

    @Get('/:taskId')
    getTask(@Param('taskId') taskId: string): Promise<Task> {
        return this.tasksService.getTask(taskId);
    }

    @Delete('/:taskId')
    deleteTask(@Param('taskId') taskid: string): Promise<void>{
        return this.tasksService.deleteTask(taskid);
    }

    @Patch('/:taskId/status')
    updateTaskStatus(@Param('taskId') taskId: string, @Body() updateTaskStatus: UpdateTaskStatusDto): Promise<Task>{
        return this.tasksService.updateTaskStatus(taskId, updateTaskStatus);
    }
}
