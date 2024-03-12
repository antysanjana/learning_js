const time = new Date().getHours();

if(time < 10){
    console.log("Good Morning!");
}else if(time < 20){
    console.log("Good Day!");
}else{
    console.log("Good Evening");
}