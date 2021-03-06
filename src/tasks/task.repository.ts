import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.tdo";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TaskStatus } from "./task-status.enum";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto;
        const task = this.create({ title, description, taskStatus: TaskStatus.OPEN });

        await this.save(task);

        return task;
    }

    async getTasks(getTasksFilterDto: GetTasksFilterDto): Promise<Task[]> {
        const { status, search } = getTasksFilterDto;

        const query = this.createQueryBuilder('task');

        if (status) {
            query.andWhere('task.status =:status', { status });
        }

        if (search) {
            query.andWhere('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)', { search: `%${search}%` });  // clean clea cle
        }

        return await query.getMany();
    }
}