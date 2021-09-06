import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.tdo';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/upda-task-status.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) { }

    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async getTask(taskId: string): Promise<Task> {
        const task = await this.taskRepository.findOne(taskId);
        if (!task) {
            throw new NotFoundException(`Task with id '${taskId}' not found`);
        }

        return task;
    }

    async deleteTask(taskId: string): Promise<void> {
        var res = await this.taskRepository.delete(taskId);

        if (res.affected === 0) {
            throw new NotFoundException(`Task with '${taskId}' not found`);
        }

    }

    async updateTaskStatus(taskId: string, updateTaskStatus: UpdateTaskStatusDto): Promise<Task> {
        const task = await this.getTask(taskId);

        task.taskStatus = updateTaskStatus.status;
        await this.taskRepository.save(task);

        return task;
    }

    getTasks(getTasksFilterDto: GetTasksFilterDto): Promise<Task[]> {
        return this.taskRepository.getTasks(getTasksFilterDto);
    }
}
