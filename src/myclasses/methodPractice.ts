export class Employee{

    getSalary(empName: string): number{
        if (empName === 'tom'){
            return 12.33
        }
        else if(empName === 'peter'){
            return 14.33;
        }
        else{
            console.log('emp not found..' + empName);
            return -1;
        }
    }
}

//create the object of this class:
let e1 = new Employee();
let sal = e1.getSalary('tom');
console.log(sal);