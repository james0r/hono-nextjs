import { todos } from './schema/todos'
import { db } from '.';

(async () => {
  await db.insert(todos).values([
    {
      content: 'Subscribe to CodeBrew',
    },
    {
      content: 'Like the video',
    },
    {
      content: 'Check out the other videos',
    },
  ])

  console.log(`Seeding complete.`)
})()