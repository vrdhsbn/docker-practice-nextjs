import mysql from 'mysql2/promise'

export async function db(sql: string, params: string[]) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  })

  try {
    await connection.beginTransaction()
    const result = await connection.query(sql, params)
    await connection.commit()

    return result
  } catch (error) {
    await connection.rollback()

    throw error
  } finally {
    await connection.end()
  }
}
