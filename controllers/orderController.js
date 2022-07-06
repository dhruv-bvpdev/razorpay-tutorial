import asyncHandler from 'express-async-handler'
import Razorpay from 'razorpay'

const newOrder = asyncHandler(async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    })
    const options = {
      amount: req.body.amount,
      currency: INR
    }
    const order = await instance.orders.create(options)
    if (!order)
      return res.status(500).send('Error Occured! Plz Try again later')
    res.send(order)
  } catch (error) {
    res.status(500).send(error)
  }
})

export { newOrder }
