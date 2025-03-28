import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js';
import Stripe from 'stripe'
import { ZaloPayClient, TokenizationAPI } from "@zalopay-oss/zalopay-nodejs";
//Global variables
const currency = 'inr'
const deliveryCharge = 10

//Gateway init
//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Placing orders using COD method
const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success: true, message: "Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

//Placing orders using Zalopay method
const placeOrderZaloPay = async (req, res) => {
    // try {
    //     const { userId, items, amount, description } = req.body;
    //     const { origin } = req.headers;

    //     if (!userId || !items || !amount || !description) {
    //         return res.status(400).json({ success: false, message: "Missing required fields" });
    //     }

    //     const currentData = Date.now();
    //     const app_time = currentData.valueOf();
    //     const tranId = moment(currentData).format('YYMMDD');
    //     const app_trans_id = `${tranId}_${app_time}`;
    //     const key1 = process.env.ZALOPAY_KEY1 || "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL"; // Nên dùng biến môi trường

    //     const orderData = {
    //         app_id: process.env.ZALOPAY_APP_ID || "demo_app_id", // Nên lấy từ biến môi trường
    //         app_user: "demo",
    //         app_time: app_time,
    //         amount: amount,
    //         app_trans_id: app_trans_id,
    //         bank_code: "zalopayapp",
    //         embed_data: JSON.stringify({ return_url: `${origin}/payment-success` }),
    //         item: JSON.stringify(items),
    //         description: description,
    //         mac: "",
    //     };

    //     // Tạo chuỗi HMAC
    //     const hmac_input = `${orderData.app_id}|${orderData.app_trans_id}|${orderData.app_user}|${orderData.amount}|${orderData.app_time}|${orderData.embed_data}|${orderData.item}`;
    //     orderData.mac = crypto.createHmac('sha256', key1).update(hmac_input).digest('hex');

    //     // Lưu đơn hàng vào database
    //     const newOrder = new orderModel(orderData);
    //     await newOrder.save();

    //     // Gửi yêu cầu thanh toán đến ZaloPay
    //     const zaloPayResponse = await fetch("https://sandbox.zalopay.vn/v2/create", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(orderData),
    //     });

    //     const zaloPayResult = await zaloPayResponse.json();

    //     if (zaloPayResult.return_code !== 1) {
    //         return res.status(400).json({ success: false, message: zaloPayResult.return_message });
    //     }

    //     res.json({ success: true, session_url: zaloPayResult.order_url });

    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: error.message });
    // }
}

//Placing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

//All Orders data for Admin Panel 
const allOrders = async (req, res) => {
    try {
        
        const orders = await orderModel.find({})
        res.json({success: true, orders})

    } catch (error) {

        console.log(error)
        res.json({success: false, message: error.message})

    }
}

//User Order Data For FrontEnd
const userOrders = async (req,res) => {
    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})

        res.json({success: true, orders})

    } catch (error) {

        console.log(error)
        res.json({success: false, message: error.message})

    }
}

//update order status
const updateStatus = async (req,res) => {
    try {
        const {orderId, status} = req.body 

        await orderModel.findByIdAndUpdate(orderId, {status})

        res.json({success:true, message: 'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {placeOrder,placeOrderRazorpay,placeOrderZaloPay,allOrders,userOrders,updateStatus}