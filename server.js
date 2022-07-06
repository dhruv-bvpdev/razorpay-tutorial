import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/connectDB.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('The app works fine')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(
    `Server up and running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
  )
})
