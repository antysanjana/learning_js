//Creating date objects
/*const d = new Date();
const d1 = new Date("2022-03-25");
console.log(d, d1);
const d2 = new Date("October 13, 2015 11:13:00");
console.log(d2);*/

//new Date(year,month,day,hours,minutes,seconds,ms)
/*const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);*/

//JavaScript counts months from 0 to 11: January = 0. December = 11.
/*const d1 = new Date(2018, 15, 24, 10, 33, 30);
const d2 = new Date(2019, 3, 24, 10, 33, 30);
console.log(d1);
console.log(d2);*/

//Specifying a day higher than max
/*const d1 = new Date(2018, 5, 35, 10, 33, 30);
const d2 = new Date(2019, 6, 5, 10, 33, 30);
console.log(d1);
console.log(d2);*/

//6 numbers specify year, month, day, hour, minute, second
/*const d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);*/

//5 numbers specify year, month, day, hour, and minute
/*const d = new Date(2018, 11, 24, 10, 33);
console.log(d);*/

//4 numbers specify year, month, day, and hour
/*const d = new Date(2018, 11, 24, 10);
console.log(d);*/

//3 numbers specify year, month, and day
/*const d = new Date(2018, 11, 24);
console.log(d);*/

//2 numbers specify year and month
/*const d = new Date(2018, 11);
console.log(d);*/

//only one parameter will be treated as milliseconds
/*const d = new Date(2018);
console.log(d);*/

//Previous Century
/*const d = new Date(99, 11, 24);
console.log(d);
const d1 = new Date(9, 11, 24);
console.log(d1);*/

//new Date(milliseconds)
/*const d = new Date(100000000000);
console.log(d);*/

/*const d = new Date(-100000000000);
console.log(d);*/

/*const d = new Date(86400000);
console.log(d);*/

/*const d = new Date(0);
console.log(d);*/

//Date Methods
/*const d = new Date();
console.log(d.toString());*/

/*const d = new Date();
console.log(d.toDateString());*/

/*const d = new Date();
console.log(d.toUTCString());*/

const d = new Date();
console.log(d.toISOString());









