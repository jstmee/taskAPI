
const {order}=require('../models/index');
class OrderRepository{
    async getAllOrders(customerId){
        try {
            const orders=await order.findAll({
                where:{
                    customer_id:customerId
                }
            });
            return orders;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports=OrderRepository;




