'use client'

import React from 'react'
import { removeItem } from '@/app/actions'

const TodoItem = ({
  id,
  content,
  timestamp,
}: {
  id: number
  content: string
  timestamp: string
}) => {

  const date = new Date(timestamp)
  const formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();//prints expected format.

  return (
    <li key={id} id={`todo-${id}`} className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{content}</p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">{formattedDate}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <form action={removeItem}>
            <button
              name="todoId"
              value={id}
            >
              x
            </button>
          </form>
        </div>
      </div>
    </li>
  )
}

export default TodoItem