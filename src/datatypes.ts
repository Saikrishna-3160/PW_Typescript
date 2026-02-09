let username: string = 'Krishna';

//varname: username
//type: string
//value: Krishna

let marks: number = 12.33;
console.log(marks);
console.log(typeof(marks));

let age: number = 30;
console.log(age);

let isActive: boolean = true;

//array: dynamic + homogeneous: only similar data type
let num: number[] = [10, 20,30];
num.push(40);

let browser: string[] = ['chrome', 'firefox', 'edge'];
console.log(browser);

//Array with generics: <>
let names: Array<string> = ['tom', 'peter'];
console.log(names);

//tuple: fixed length array: heterogeneous
let person: [string, number] = ['tom', 30];
console.log(person);
person.push(46, 40); //loosely coupled, you can add anytype of data
console.log(person);

let empdata: [string, string, number,number, boolean] = ['naveen', 'MS', 20, 12.33, true];

//from the TS: 4.0+ you can give names to the elements:
let employee: [id: number, name: string, salary: number, isActive: boolean] = [101, 'tom', 34.55, false];
console.log(employee);

//enum: collection of constants:
enum Browser {
    chrome = 'google chrome',
    firefox = 'mozilla firefox',
    edge = 'MS edge',
    safari = 'apple safari'
}

console.log(Browser.chrome);

//any:
let data: any = 45;
data = 'playwright';
data = true;
data = 120;
data = 12.33;

console.log(data);

//unknown:
let value: unknown = 'hello';
console.log(value);

if(typeof(value) === 'string'){
    console.log(value.length);
}

function add (x: number, y: number): number{
    return x + y; //number
}

let s1: number = add(10, 20);
console.log(s1);

