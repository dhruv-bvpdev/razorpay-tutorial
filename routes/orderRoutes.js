import express from 'express'
const router = express.Router()

import { newOrder } from '../controllers/orderController.js'

router.route('/').post(newOrder)

export default router
