//The setFullYear() Method
/*const d = new Date();
d.setFullYear(2020);
console.log(d);*/

/*const d = new Date();
d.setFullYear(2020, 6, 27);
console.log(d);*/

//The setMonth() Method
/*const d = new Date();
d.setMonth(8);
console.log(d);*/

//The setDate() Method
/*const d = new Date();
d.setDate(8);
console.log(d);*/

/*const d = new Date();
d.setDate(d.getDate() + 50);
console.log(d);*/

//The setHours() Method
/*const d = new Date();
d.setHours(22);
console.log(d);*/

//The setMinutes() Method
/*const d = new Date();
d.setMinutes(30);
console.log(d);*/

//The setSeconds() Method
/*const d = new Date();
d.setSeconds(30);
console.log(d);*/

//Compare Dates
let text = " ";
const d = new Date();
const e = new Date();
e.setFullYear(2100, 0, 14);

if(e > d){
    text = "Today is before January 14, 2100";
}
else {
    text = "Today is after January 14, 2100";
}
console.log(text);