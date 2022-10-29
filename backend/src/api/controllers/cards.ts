import { Request, Response } from 'express-serve-static-core'

export function createCard (req: Request, res: Response): Response {
  return res.status(200).send({ success: true })
}
