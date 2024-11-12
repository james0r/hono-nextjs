"use server"

import { db } from '@/db'
import { todos } from '@/db/schema'
import {eq} from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export const addTodo = async (formData: FormData) => {
  const content = formData.get('content') as string;
  const timestamp = new Date().toISOString();

  await db.insert(todos).values({
    content,
    timestamp
  });

  revalidatePath('/todos');
}

export const removeItem = async (formData: FormData) => {
  const todoId = Number(formData.get('todoId'));
  if (!isNaN(todoId)) {
    await db.delete(todos).where(eq(todos.id, todoId));
  } else {
    throw new Error('Invalid todoId');
  }

  revalidatePath('/todos');
}