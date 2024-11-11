import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import { todos } from '@/db/schema'
import { db } from '@/db'

export const dynamic = 'force-dynamic'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono on Vercel!'
  })
})

app.get('/todos', async (c) => {
  const results = await db.select().from(todos);

  return c.json(
    results
  );
});

app.get('/todos/delete/:id', async (c) => {
  const id = c.req.param('id')

  return c.json({
    message: `Deleted todo with id ${id}`
  })
})

app.get('/:wild', (c) => {
  const wild = c.req.param('wild')
  return c.json({
    message: `Hello from Hono on Vercel! You're now on /api/${wild}!`
  })
})

export const GET = handle(app)