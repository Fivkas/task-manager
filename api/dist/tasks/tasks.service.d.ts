import { PrismaService } from '../prisma.service';
import { Task } from '@prisma/client';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task | null>;
    create(title: string): Promise<Task>;
    update(id: number, data: Partial<Task>): Promise<Task>;
    delete(id: number): Promise<Task>;
    toggleComplete(id: number): Promise<Task>;
}
