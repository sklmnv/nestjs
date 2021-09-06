import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.tdo';
import { GetTasksFilterDro } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/upda-task-status.dto';

@Injectable()
export class TasksService {
    // private tasks: Task[] = [];

    // public getTasks(): Task[] {
    //     return this.tasks;
    // };

    // public createTask(createTaskDto: CreateTaskDto) {
    //     const { title, description } = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title: title,
    //         description: description,
    //         status: TaskStatus.OPEN
    //     };

    //     this.tasks.push(task);

    //     return task;
    // }

    // public getTask(taskId: string): Task {
    //     const foundTask = this.tasks.find(task =>
    //         task.id === taskId
    //     );

    //     if (!foundTask) {
    //         throw new NotFoundException(`Task with "${taskId}" not found.`);
    //     }
    //     else {
    //         return foundTask;
    //     }
    // }

    // public deleteTask(taskId: string): void {
    //     const task = this.getTask(taskId);
    //     this.tasks = this.tasks.filter((task) => task.id !== taskId);
    // };

    // public updateTaskStatus(taskId: string, updateTaskStatus: UpdateTaskStatusDto): TaskStatus {
    //     const task = this.getTask(taskId);
    //     task.status = updateTaskStatus.status;
    //     return task.status;
    // }

    // public getTasksWithFilter(getTasksFilterDto: GetTasksFilterDro): Task[] {
    //     const { status, search } = getTasksFilterDto;

    //     let tasks = this.getTasks();

    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }

    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             if (task.title.includes(search) || task.description.includes(search)) {
    //                 return true;
    //             }
    //             return false;

    //         });

    //     }

    //     return tasks;
    // }
}
