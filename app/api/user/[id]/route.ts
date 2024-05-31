import { db } from '@/app/lib/db'
import type { NextRequest } from 'next/server'

type User = {
  id: number
  first_name: string
  last_name: string
}

export async function GET(
  // biome-ignore lint: ""
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id

  try {
    const getUser = await db(
      'SELECT * FROM test_db.users WHERE id = ? AND deleted_at IS NULL;',
      [id],
    )

    const userData = getUser[0] as User[]
    return new Response(
      JSON.stringify({
        message: 'DBからデータを取得しました。',
        first_name: userData[0].first_name,
        last_name: userData[0].last_name,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
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
