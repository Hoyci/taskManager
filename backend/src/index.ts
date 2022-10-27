import { createServer } from './utils/server'

createServer()
  .then(server => server.listen(3000, () => console.log('Server is running on http://localhost:3000 🚀  ')))
  .catch((err: Error) => console.log(`Error: ${err.message}`))
