const OrderRepository=require('../repository/order-repository');
class OrderService{
    constructor(){
        this.orderRepository=new OrderRepository();
    }
    async getOrders(id){
        try {
            const orders=this.orderRepository.getAllOrders(id);
            return orders;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports=OrderService;