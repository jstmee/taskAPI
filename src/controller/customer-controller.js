const CustomerService=require('../services/customer-service');
const customerService=new CustomerService();
//get request url=/customer
const getAllCustomers=async (req,res)=>{
    try {
        const cutomers=await customerService.getCustomers();
        return res.status(200).json({
            data:cutomers,
            success:true,
            message:"successfully fetch all the customers",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to get all customers",
            err:error
        });
    }
}
module.exports=getAllCustomers;


