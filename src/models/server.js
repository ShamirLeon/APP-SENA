import express from 'express'
import cors from 'cors'
import dbConnection from '../database/config.js'

class Server {
  constructor () {
    this.port = process.env.PORT
    this.app = express()
    this.connectionDB()
  }

  async connectionDB () {
    await dbConnection()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use(cors)
    this.app.use(express.static('static'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`✅ Server running on port ${this.port}.`)
    })
  }
}

export default Server
