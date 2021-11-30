const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const MAX_HRS_INMOTH=100;
const NUM_OF_WORKING_DAYS=10;
let totalEmpHRS=0;
let totalWorkingDays=0;
while (totalEmpHRS<MAX_HRS_INMOTH && totalEmpHRS<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3+1;
    totalEmpHRS+=getWorkingHours(empCheck);

}
let empHrs=0;

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    
    
    }
    
}

let empWage=totalEmpHRS*WAGE_PER_HOUR;
console.log("Empolye Wage For Month is"+empWage);