const Order = require('../models/Order')

module.exports = {
    getOrder: async (req,res) => {
        let orders;
        if(req.user.role == 'admin'){
            orders = await Order.all()
        }else{
            orders = await Order.findByCustomer(req.user._id)
        }
        res.json(orders)
    },

    createOrder: async (req,res) => {
        let result = await Order.create(req.body, req.user)
        if(result.error){
            res.status(400).json({error: "Could not create order"})
        }else{
            res.json({message: "Order created"})
        }
    }
}