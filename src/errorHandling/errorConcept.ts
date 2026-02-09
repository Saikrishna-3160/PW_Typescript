function m1(){
    console.log('m1 method');
    m2();
}

function m2(){
    console.log('m2 method');
    try{
        m3();
        //connection with DB
        //hit SQL
        //get the results - from DB table
    }
    catch(error){
        console.log(error); //db error
    }
    finally{
        console.log('close db connection..');
        
    }
}

function m3(){
    console.log('m3 method');
    throw new Error('===SOME ERROR===');
    // try {
    //     throw new Error('===SOME ERROR===')
    // } catch (error) {
    //     console.log('error is handled');
    //     console.log(error);
        
    // }
    
}


m1();
console.log('BYE!!!!!!!');