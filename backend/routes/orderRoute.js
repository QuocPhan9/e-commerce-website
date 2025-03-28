import express from 'express'
import {placeOrder,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/userAuth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list', allOrders)
orderRouter.post('/status', updateStatus)

//Payment Features
orderRouter.post('/place', authUser,placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)

//User Features
orderRouter.post('/userOrders', authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser, verifyStripe)
export default orderRouter