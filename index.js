//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
}

// calculating totals (sum of all 30 days)
const tot_temperature_in_fahrenheit = day1Temp + (day2Temp * 9/5 + 32) + day3Temp + (day4Temp * 9/5 + 32) + day5Temp + (day6Temp * 9/5 + 32) + da
y7Temp + (day8Temp * 9/5 + 32) + day9Temp + (day10Temp * 9/5 + 32) + day11Temp + (day12Temp * 9/5 + 32) + day13Temp + (day14Temp * 9/5 + 32) + day15Temp + (day16Temp * 9/5 + 32) + day17Temp + (day18Temp * 9/5 + 32) + day19Temp + (day20Temp * 9/5 + 32) + day21Temp + (day22Temp * 9/5 + 32) + day23Temp 
+ (day24Temp * 9/5 + 32) + day25Temp + (day26Temp * 9/5 + 32) + day27Temp + (day28Temp * 9/5 + 32) 
+ day29Temp + (day30Temp * 9/5 + 32);
const tot_temperature_in_celsius = day1Temp + day2Temp + day3Temp + day4Temp + day5Temp + day6Temp
 + day7Temp + day8Temp + day9Temp + day10Temp + day11Temp + day12Temp + day13Temp + day14Temp + day15Temp
  + day16Temp + day17Temp + day18Temp + day19Temp + day20Temp + day21Temp + day22Temp + day23Temp
    + day24Temp + day25Temp + day26Temp + day27Temp + day28Temp + day29Temp + day30Temp;

//calculating avarages
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//log the results to check your work
console.log("Average in F:", avg_temperature_in_fahrenheit);
console.log("Average in C:", avg_temperature_in_celsius);