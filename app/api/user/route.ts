import { db } from '@/app/lib/db'

type User = {
  id: number
  first_name: string
  last_name: string
}

export async function GET() {
  try {
    const getUser = await db('SELECT * FROM test_db.users;', [])
    const userData = getUser[0] as User[]

    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    const errorMessage = (error as Error).message

    return new Response(
      JSON.stringify({
        message: 'DBからデータを取得できませんでした。',
        error: errorMessage,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
