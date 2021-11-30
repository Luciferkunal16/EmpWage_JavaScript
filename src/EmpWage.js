const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHour=0;
empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck){
    case IS_PART_TIME:
        empHour=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHour=FULL_TIME_HOURS;
        break;
    default:
        empHour=0;


}
let empWage=empHour*WAGE_PER_HOUR;
console.log(empWage);