export class Car{
    // name: string;
    // color: string;
    // price: number;

    // constructor(name: string, color: string, price: number){
    //     this.name = name;
    //     this.color = color;
    //     this.price = price;
    // }

    //If no constructor available, a default const added and hidden

    start(): void{
        console.log('car start');
    }

    stop(): void{
        console.log('car -- stop');
        
    }

}

export class BMW extends Car{
    // name: string;
    // color: string;
    // price: number;

    // constructor(name: string, color: string, price: number){
    //     //call the super class const..
    //     //super(name, color, price);
    //     super();
    //     this.name = name;
    //     this.color = color;
    //     this.price = price;
    
    override start(): void {
        console.log('BMW start');
    }

    autoParking(): void{
        console.log('BMW -- auto parking');
    }
}
