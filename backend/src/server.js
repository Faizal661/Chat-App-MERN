import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js'


const app = express()

const PORT = process.env.PORT || 3333

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log('Server is started on port :',PORT)
    connectDB()
})

