import express from 'express'
const router = express.Router()

import {
  getAllOrders,
  newOrder,
  saveOrderToDb
} from '../controllers/orderController.js'

router.route('/').post(newOrder).get(getAllOrders)
router.route('/save').post(saveOrderToDb)

export default router
