import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }

  @Post()
  async create(@Body('title') title: string): Promise<Task> {
    return this.tasksService.create(title);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { title?: string; completed?: boolean },
  ): Promise<Task> {
    return this.tasksService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.delete(id);
  }

  @Post(':id/toggle')
  async toggle(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.toggleComplete(id);
  }
}

