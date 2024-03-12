/*switch(new Date().getDay()){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satueday");
}*/

//The default Case
/*switch(new Date().getDay()){
    default:
        console.log("Looking forward to the weekend");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Today is Sunday");
}*/

//Strict Comparison
/*let x = "0";
switch (x) {
  case 0:
    text = "Off";
    console.log(text);
    break;
  case 1:
    text = "On";
    console.log(text);
    break;
  default:
    text = "No value found";
    console.log(text);
}*/

//Common Code Blocks
switch(new Date().getDay()){
    case 4:
    case 5:
        console.log("Soon it is weekend");
        break;
    case 0:
    case 6:
        console.log("It is weekend");
        break;
    default:
        console.log("Looking forward to the weekend");
}