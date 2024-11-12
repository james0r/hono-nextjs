'use client'

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { addTodo } from '@/app/actions'

export const AddTodo = () => {
  const [content, setContent] = React.useState('')

  return (
    <>
      <div>Add a Todo</div>
      <form
        className="flex"
        action={addTodo}
        onSubmit={() => setContent('')}
      >
        <Input
          type="text"
          name="content"
          placeholder="Add a new todo"
          className="mr-4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button variant="outline" type="submit">Add</Button>
      </form>
    </>
  )
}