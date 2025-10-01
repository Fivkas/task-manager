import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async create(title: string): Promise<Task> {
    return this.prisma.task.create({
      data: { title },
    });
  }

  async update(id: number, data: Partial<Task>): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }

  async toggleComplete(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return this.prisma.task.update({
      where: { id },
      data: { completed: !task.completed },
    });
  }
}

