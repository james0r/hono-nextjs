import React from 'react'
import { TodosList } from '@/components/TodosList'
import { AddTodo } from '@/components/AddTodo'

const Todos = async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  })

  const vietnamTimeReponse = await fetch('http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh')

  const { joke } = await response.json()

  const { datetime } = await vietnamTimeReponse.json()

  const date = new Date(datetime)

  // Format the date to a human-readable string
  const readableDate = date.toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok' // This matches the UTC+7 timezone
  })

  console.log(readableDate)

  return (
    <>
      <div className="mt-8 w-full max-w-md mx-auto dark:text-white space-y-8">
        <AddTodo />
        <TodosList />
        <h2>Joke</h2>
        <p>{joke}</p>
        <h2>Vietnam Time</h2>
        <p>{readableDate}</p>
      </div>
    </>
  )
}

export default Todos