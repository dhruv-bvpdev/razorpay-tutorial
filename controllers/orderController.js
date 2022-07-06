import asyncHandler from 'express-async-handler'
import Razorpay from 'razorpay'
import Order from '../models/OrderModel.js'

// @desc Create new order
// @route POST /api/orders
// @access Public
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

// @desc Create new order
// @route POST /api/orders/save
// @access Public
const saveOrderToDb = asyncHandler(async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body
    const orderToBeSaved = Order({
      isPaid: true,
      amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature
      }
    })
    await orderToBeSaved.save()
    res.send({
      message: 'Payment Successfull'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

// @desc Send all order
// @route GET /api/orders
// @access Public
const getAllOrders = asyncHandler(async (req, res) => {
  const order = await Order.find()
  res.send(order)
})

export { newOrder, saveOrderToDb, getAllOrders }
