let myusername: string = 'tom';
let myage: number = 30;

type userID = string | number;
let myUserID: userID = 'naveenAutomation';
let custID: userID = 123;

console.log(myUserID);
console.log(custID);

type status = 'pending' | 'inprogress' | 'completed' | 100;
let orderStatus: status = 'inprogress';

type httpStatus = 400 | 200;
let OKstatus: httpStatus = 200;
let badRequest: httpStatus = 400;

type User = {
    id: string | number,
    name: string,
    salary: number,
    isActive: boolean,
    createdAt: Date
}

let newUser1: User = {
    id: 3214,
    name: 'Sai krishna',
    salary: 12.33,
    isActive: true,
    createdAt: new Date()
}

let newUser2: User = {
    id: 'sk007',
    name: 'Salman khan',
    salary: 10,
    isActive: false,
    createdAt: new Date()
}

console.log(newUser1);
