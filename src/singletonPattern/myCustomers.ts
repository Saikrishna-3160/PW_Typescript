export class Customer{

    //Singleton Pattern: u can create only one object/instance of the class
    private static customer: Customer; //null or undefined

    private constructor(){}

    public static getInstance(): Customer{
        if (Customer.customer == null){
            Customer.customer = new Customer();
        }
        return Customer.customer;
    }

    public getInfo(): void{
        console.log('getting customer info..');
    }
}

//you cannot create object of this class using new

// let c1 = Customer.getInstance();
// let c2 = Customer.getInstance();
// console.log(c1 === c2);

Customer.getInstance().getInfo();
