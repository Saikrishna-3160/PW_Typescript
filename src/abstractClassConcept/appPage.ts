//abstract class: abstract + non abstract methods
//0% abstraction
//100% abstraction
//partial abstraction
//interface: 100% abstraction

export abstract class Page{

    name: string;
    timer: number;

    constructor(name: string, timer: number){
        this.name = name;
        this.timer = timer;
    }

    abstract title(): void;
    abstract url(): void;

    loadingTime(): void{
        console.log(`page -- loading...10..secs`);
    }
}

export class LoginPage extends Page{

    name: string;
    timer: number;
    constructor(name: string, timer: number){
        super(name, timer);
        this.name = name;
        this.timer = timer;
    }

    override title(): void {
        console.log(`login page title`);
        
    }
    override url(): void {
        console.log(`login page url -- https://abc.com`);
        
    }

    override loadingTime(): void {
        console.log(`page -- loading.. 2 secs`);
        
    }

    login(username: string, password: string): void{
        console.log(`login with ${username} and ${password}`);
        
    } 
    
}

//cannot create the object of anstract class:

let lp = new LoginPage('Amazon', 50);
console.log(lp.name);
console.log(lp.timer);
lp.title();
lp.url();
lp.loadingTime();
lp.login('Addin', 'Admin123');