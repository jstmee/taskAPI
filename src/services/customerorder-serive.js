const CustomerOrderRepository=require('../repository/customerorder-repository');
class CustomerOrderService{
    constructor(){
        this.customerorderRepository=new CustomerOrderRepository();
    }
    async getCustomerOrders(){
        try {
            const result=this.customerorderRepository.getAllCustomerTotalOrdersWithTotalAmount();
            return result;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports=CustomerOrderService;