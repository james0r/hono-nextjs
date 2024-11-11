import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { addTodo } from '@/app/actions'

export const AddTodo = () => {
  return (
    <>
      <div>AddTodo</div>
      <form className="flex" action={addTodo}>
        <Input
          type="text"
          name="content"
          placeholder="Add a new todo"
          className="mr-4"
        />
        <Button variant="outline" type="submit">Add</Button>
      </form>
    </>
  )
}