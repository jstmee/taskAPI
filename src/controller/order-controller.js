const OrderService=require('../services/order-service');
const orderService=new OrderService();
//get request url=/order
const getOrdersById=async (req,res)=>{
    try {
        const ordersById=await orderService.getOrders(req.params.id);
        return res.status(200).json({
            data:ordersById,
            success:true,
            message:"successfully fetch all the orders of a customer ",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to get orders",
            err:error
        });
    }
}
module.exports=getOrdersById;


