
const {customer}=require('../models/index');
class CustomerRepository{
    async getAllCustomers(){
        try {
            const customers=await customer.findAll();
            return customers;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports=CustomerRepository;




