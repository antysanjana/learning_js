/*try{
    adddleart("Welcome Host!!");
}catch(err){
    console.log(err.message);
}*/

/*let x = "99";

    try{
        //if(x.trim() == "")throw "empty";
        if(isNaN(x))throw "Not a Number";
        x = Number(x)
        if(x<5)throw "too low";
        if(x>10)throw "too high"
    }catch(err){
        console.log("Input is " + err);
    }*/

//Range error
/*let num = 1;
try{
    num.toPrecision(500);
}catch(err){
    console.log(err.message);
}*/

//Reference error
/*let x = 5;
try{
    x = y + 1;
}catch(err){
    console.log(err.message);
}*/

//Syntax Error
/*try{
    eval("alert('Hello)");
}catch(err){
    console.log(err.message);
}*/

//type error
/*let num = 1;
try{
    num.toUpperCase();
}catch(err){
    console.log(err.message);
}*/

//URI (Uniform Resource Identifier) Error
try{
    decodeURI("%%%");
}catch(err){
    console.log(err.message);
}



