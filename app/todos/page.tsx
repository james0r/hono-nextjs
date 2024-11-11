import React from 'react'
import { TodosList } from '@/components/TodosList'
import { AddTodo } from '@/components/AddTodo'

const Todos = () => {
  return (
    <>
      <div className="mt-8 w-full max-w-md mx-auto dark:text-white space-y-8">
        <AddTodo />
        <TodosList />
      </div>
    </>
  )
}

export default Todos