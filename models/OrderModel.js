import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String
  }
})

const Order = mongoose.model('Order', orderSchema)

export default Order
