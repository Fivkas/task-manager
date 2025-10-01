import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAll(): Promise<Task[]>;
    getOne(id: number): Promise<Task | null>;
    create(title: string): Promise<Task>;
    update(id: number, body: {
        title?: string;
        completed?: boolean;
    }): Promise<Task>;
    delete(id: number): Promise<Task>;
    toggle(id: number): Promise<Task>;
}
