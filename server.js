import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/connectDB.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get('/get-razorpay-key', (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID })
})

app.use('/api/orders', orderRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(
    `Server up and running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
  )
})
