import { type NextApiRequest, type NextApiResponse } from 'next'
import { faker } from '@faker-js/faker'

interface User {
  userId: string
  username: string
  email: string
  avatar: string
  password: string
  birthdate: Date
  registeredAt: Date
}

// Função para gerar usuários fictícios
const generateUsers = (count: number): User[] => {
  const users: User[] = []
  for (let i = 0; i < count; i++) {
    const user: User = {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'p' }),
      birthdate: faker.date.past(),
      registeredAt: faker.date.past()
    }
    users.push(user)
  }
  return users
}

export default (req: NextApiRequest, res: NextApiResponse): void => {
  // Verificando se o método da solicitação é GET
  if (req.method === 'GET') {
  // Se for uma solicitação GET, envie uma resposta com status 200 e uma mensagem
    const users = generateUsers(1000)
    res.status(200).json({ users })
  } else {
  // Se for uma solicitação de outro tipo, envie uma resposta com status 405 (Método não permitido)
    res.status(405).json({ message: 'Método não permitido' })
  }
}
