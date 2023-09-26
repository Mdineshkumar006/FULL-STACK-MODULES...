var currentDT = new Date();
var currentTimeUnix = currentDT.getTime();
var currentFullYr = currentDT.getFullYear();
var currentDay = currentDT.getDay();
var currentMonth = currentDT.getMonth();
var currentDateString = currentDT.toDateString();
var milliseconds = currentDT.getMilliseconds();
var timezone = currentDT.getTimezoneOffset();
var utuDate = currentDT.getUTCDate();
var locale = currentDT.toLocaleString();

//console.log(milliseconds);
//console.log(timezone);
//console.log(utuDate);
//console.log(locale);

var someDateTime =  1668536092000;
var someRandomDate = '12/12/2012';
var convertedDateTime = new Date(1668536092000);
var convertedRandom = new Date(someRandomDate).getTime();
console.log(convertedRandom);
// 0,1,2,3,4,5,6
// S,M,T,W,T,F,S