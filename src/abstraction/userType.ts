
export interface User{
    name: string;
    age: number;

    drive(): void;
}

export interface Customer{
    salary: number;
    login(): void;
}

let user: User & Customer = {
    name: "Tom",
    age: 30,
    salary: 12.33,

    login(): void {
        console.log('user is logged in', user.name, user.age);
    },

    drive(): void {
        console.log(`User is driving: ${user.name} ${user.age}`);
    }
}

console.log(user.name);
user.drive();
user.login();
console.log(user.salary);

