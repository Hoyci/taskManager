import express from 'express'
import { Express } from 'express-serve-static-core'
import YAML from 'yamljs'
import { connector, summarise } from 'swagger-routes-express'
import * as OpenApiValidator from 'express-openapi-validator'

import * as api from '../api/controllers'

export async function createServer (): Promise<Express> {
  const ymlSpecFile = './config/openapi.yml'
  const apiDefiniton = YAML.load(ymlSpecFile)
  const apiSummary = summarise(apiDefiniton)
  console.log(apiSummary)

  const server = express()
  server.use(express.json())

  const validatorOptions = {
    apiSpec: ymlSpecFile,
    validateRequests: true,
    validateResponses: true
  }

  server.use(OpenApiValidator.middleware(validatorOptions))

  const connect = connector(api, apiDefiniton, {
    onCreateRoute: (method: string, descriptor: any[]) => {
      descriptor.shift()
      console.log(`${method}: ${descriptor.map((d: any) => d.name).join(', ')}`)
    }
  })

  connect(server)

  return server
}
