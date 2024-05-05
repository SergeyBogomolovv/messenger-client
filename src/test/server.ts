// import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = []

const server = setupServer(...handlers)
export default server
