'use server'

import { db } from '@/app/lib/db'
import { revalidatePath } from 'next/cache'

export const InsertItem = async (formData: FormData) => {
  const first_name = formData.get('first_name')
  const last_name = formData.get('last_name')

  const query = `INSERT INTO test_db.users (first_name, last_name) VALUES ("${first_name}","${last_name}");`

  try {
    await db(query, [])

    revalidatePath('/')
  } catch (error) {
    const errorMessage = (error as Error).message

    return new Response(
      JSON.stringify({
        message: 'DBへのアクセスに失敗しました。',
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
