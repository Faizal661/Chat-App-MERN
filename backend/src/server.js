import express from 'express'
import authRoutes from './routes/auth.route.js'


const app= express()

app.use('/api/auth',authRoutes)

app.listen(3333,()=>{
    console.log('Server is started on port 3333')
}) 