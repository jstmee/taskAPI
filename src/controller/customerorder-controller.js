const CustomerOrderService=require('../services/customerorder-serive');
const customerorderService=new CustomerOrderService();
//get request url=/order
const getCustomerOrdersByTotalCountAndTotalAmounts=async (req,res)=>{
    try {
        const results=await customerorderService.getCustomerOrders();
        return res.status(200).json({
            data:results,
            success:true,
            message:"successfully fetch total number of orders and total amount for each customer, sorted alphabetically by customer country. ",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to fetch the records",
            err:error
        });
    }
}
module.exports=getCustomerOrdersByTotalCountAndTotalAmounts;


