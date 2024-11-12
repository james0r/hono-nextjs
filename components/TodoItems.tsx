'use client'

import React from 'react'
import TodoItem from './TodoItem'
import { motion, AnimatePresence } from "framer-motion"
import { todos } from '../db/schema'

const TodoItems = ({ items }: any) => {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    setTodos(items)
  }, [items])

  return (
    <>
      <AnimatePresence>
        {
          todos.map((todo: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TodoItem
                key={index}
                id={todo.id}
                content={todo.content}
                timestamp={todo.timestamp}
              />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </>
  )
}

export default TodoItems