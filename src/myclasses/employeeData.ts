//Access modifiers:
//public: anywhere
//private: only with in the class
//protected: within the class + in the child class

export class Employee{
    public name: string;
    public age: number;
    private salary: number;
    protected isActive: boolean;

    constructor(name: string, age: number, salary: number, isActive: boolean){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    public drive(): void{
        console.log(this.name);
        console.log(this.salary);
        console.log(this.isActive); 
    }

    public getSalary(): number{
        return this.salary;
    }

    private getDetails(): void{
        console.log('get details');
    }

    protected getUserData(): void{
        console.log('getting user data');
    }
}

// let e1 = new Employee('ravi', 30, 12.33, true);
// console.log(e1.age);
// console.log(e1.name);
//e1.drive();
//console.log(e1.salary); //CT - private
//console.log(e1.isActive); //CT - protected