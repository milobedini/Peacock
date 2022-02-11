import express from 'express'
import mongoose from 'mongoose'
import { dbUri, port } from './config/environment.js'
import router from './config/router.js'

const app = express()

const startServers = async () => {
  try {
    // Connect to DB
    await mongoose.connect(dbUri)
    console.log('Database up and running')

    //JSON Parser
    app.use(express.json())

    // Logger Middleware
    app.use((req, _res, next) => {
      console.log(`Request received for ${req.method} at ${req.url}`)
      next()
    })

    // Router
    app.use('/api', router)

    // Catch All
    app.use((_req, res) => {
      res.status(404).json({ message: 'Route Not Found' })
    })

    // Start DB once server connected successfully:
    app.listen(port, () => console.log(`Server be running 🔥 on port ${port}`))
  } catch (err) {
    console.log('Ouch, error => ', err)
  }
}

startServers()
