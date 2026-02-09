export class User{

    public name: string;
    public age: number;
    public salary: number;
    readonly shares: number = 1000;

    constructor(name: string, age: number, salary: number){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    drive(): void{
        console.log('user is driving: ' + this.name);
    }

}

//create the object of User class: new keyword:
// let u1 = new User('Abhi', 30, 12.33);
// console.log(u1.name, u1.age);
// u1.drive();
// u1.age = 35;
// console.log(u1.name, u1.age);
//u1.shares = 30; --readonly, cannot update

