import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { db } from '@/db'
import { todos } from '@/db/schema'
import { SelectTodo } from '@/db/schema'
import { motion, AnimatePresence } from "framer-motion"

export const TodosList = async () => {
  const results = await db.select().from(todos) as SelectTodo[]

  return (
    <>
      <h1>My Todos</h1>
      <div
        className="mt-2 p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-100"
      >
        <div className="flow-root">
          <ul
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {results.map((todo: any) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  content={todo.content}
                  timestamp={todo.timestamp}
                />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
