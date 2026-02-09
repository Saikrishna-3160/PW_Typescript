export class Shop{

    //private const..
    private constructor(){}

    login(): Shop{
        console.log('login to app');
        return this;
    }

    search(): Shop{
        console.log('search for the required product');
        return this;
    }

    addToCart(): Shop{
        console.log('add to cart for this product');
        return this;
    }

    payment(): Shop{
        console.log('making the payment using CC');
        return this;
    }

    logout(): Shop{
        console.log('logout');
        return this;
    }

    static builder(): Shop{
        return new Shop();
    }

    build(): void{
        console.log('email is sent...shopping is done!');
    }
    
}

//Use Case: 1
Shop.builder()
    .login()
    .search()
    .addToCart()
    .payment()
    .logout()
    .build();

//Use Case: 2
Shop.builder()
    .login()
    .search()
    .logout();
    
//Use Case: 3
Shop.builder().login().logout(); 