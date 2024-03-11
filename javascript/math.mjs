function add(a, b){
    return a+b;
}

function caps(str){
    try{
        if(str === null){
            throw new Error('String Expected. NULL is GIVEN');
        }else if(/*check if it is a number*/){
            throw new Error('String Expected. Number is GIVEN');
        }
        return str.toUpperCase();
    }catch(error){ 
        return error.message;
    }finally{
        console.log("Operation Done!");
    }
}

function subtract(a, b){
    return a-b;
}
export {add, caps, subtract}