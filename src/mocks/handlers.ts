import { rest } from "msw"
import { user } from "./userData"

export const handlers = [
  rest.get('https://api.github.com/users/:user', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user))
  }),

  rest.get('https://api.github.com/users/:user/repos', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(new Array(8).fill({})))
  })
]