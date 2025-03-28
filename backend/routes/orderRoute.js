import express from 'express'
import {placeOrder,placeOrderRazorpay,placeOrderZaloPay,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/userAuth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list', allOrders)
orderRouter.post('/status', updateStatus)

//Payment Features
orderRouter.post('/place', authUser,placeOrder)
orderRouter.post('/zalopay',authUser, placeOrderZaloPay)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

//User Features
orderRouter.post('/userOrders', authUser,userOrders)

export default orderRouter