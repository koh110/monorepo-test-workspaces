import http from 'http'
import express from 'express'
import { toFormatString } from '@my-module/shared/src/date-util.js'

const PORT = process.env.PORT

const app = express()

const server = http.createServer(app)
server.listen(PORT, () => {
  console.log('listen on', server.address())
  console.log(toFormatString(new Date()))
})
