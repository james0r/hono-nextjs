import React from 'react'
import { TodosList } from '@/components/TodosList'
import { AddTodo } from '@/components/AddTodo'
import TimeByTimezone from '@/components/TimeByTimezone'

const Todos = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    },
    cache: 'no-store'
  })

  const { joke } = await response.json()

  return (
    <>
      <div className="mt-8 w-full max-w-md mx-auto dark:text-white space-y-8">
        <AddTodo />
        <TodosList />
        <h2>Joke</h2>
        <p>{joke}</p>
        <h2>Vietnam Time</h2>
        <TimeByTimezone timezone="Asia/Ho_Chi_Minh" />
      </div>
    </>
  )
}

export default Todos