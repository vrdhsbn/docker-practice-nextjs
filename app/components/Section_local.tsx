type User = {
  id: number
  first_name: string
  last_name: string
}

export const SectionLocal = async () => {
  const userData: Array<User> = await fetch(
    'http://localhost:3000/api/user/',
  ).then(res => res.json())

  return (
    <div>
      <p>ローカルDBから取得したデータ</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓</th>
            <th>名</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
