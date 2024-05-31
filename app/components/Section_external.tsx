type User = {
  id: number
  name: string
  email: string
}

export const SectionExternal = async () => {
  const userData: Array<User> = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then(res => res.json())

  return (
    <div>
      <p>外部APIから取得したデータ</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
