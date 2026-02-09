export class Util{
    private constructor() {} //cannot extend this class

    static readPDF(): void{
        console.log('read pdf');
    }

    static writeExcel(): void{
        console.log('write in xls');
        
    }
}

//export class Person extends Util{}

//let e1 = new Util();
Util.readPDF();
Util.writeExcel();
