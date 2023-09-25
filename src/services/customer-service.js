const CustomerRepository=require('../repository/customer-repository');
class CustomerService{
    constructor(){
        this.customerRepository=new CustomerRepository();
    }
    async getCustomers(){
        try {
            const customers=this.customerRepository.getAllCustomers();
            return customers;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports=CustomerService;