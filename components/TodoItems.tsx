'use client'

import React from 'react'
import TodoItem from './TodoItem'
import { motion, AnimatePresence } from "framer-motion"

const TodoItems = ({ items }: any) => {
  return (
    <>
      {
      items.map((todo: any, index: number) => (
        <AnimatePresence key={index}>
          {
            todo && (
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
            )
          }
        </AnimatePresence>
      ))
      }
    </>
  )
}

export default TodoItems