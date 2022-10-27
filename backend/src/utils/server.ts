import express from 'express'
import { Express } from 'express-serve-static-core'
// import YAML from 'yamljs'
// import { summarise } from 'swagger-routes-express'

export async function createServer (): Promise<Express> {
  // const apiDefiniton = YAML.load('./config/openapi.yml')
  // const apiSummary = summarise(apiDefiniton)
  const server = express()

  return server
}
