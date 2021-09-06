import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { title } from 'process';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.tdo';
import { GetTasksFilterDro } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/upda-task-status.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() getTasksFilterDro: GetTasksFilterDro): Task[] {
        if (Object.keys(getTasksFilterDro).length) {
            return this.tasksService.getTasksWithFilter(getTasksFilterDro);
        }
        else {
            return this.tasksService.getTasks();
        }
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    } s

    @Get('/:taskId')
    getTask(@Param('taskId') taskId: string) {
        return this.tasksService.getTask(taskId);
    }

    @Delete('/:taskId')
    deleteTask(@Param('taskId') taskId: string) {
        this.tasksService.deleteTask(taskId);
    }

    @Patch('/:taskId/status')
    updateTaskStatus(@Param('taskId') taskId: string, @Body() updateTaskStatus: UpdateTaskStatusDto) {
        return this.tasksService.updateTaskStatus(taskId, updateTaskStatus);
    }
}
