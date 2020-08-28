// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Exercises 1 through 9 

//1. In this first exercise, go through the array by printing all the values ​​it contains with the function console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//2. For the second exercise, you must sum all the values ​​contained in the array and print the result;
let sum = 0;
for (let i = 0; i < numbers.length; i+=1) {
    sum += numbers[i];
}
console.log(`The sum of all values is ${sum}`);

//3. For the third exercise, calculate and print the average of the values ​​contained in the array;
// The average is the result of the sum of all elements divided by the total number of elements.
let average = 0;
average = sum / numbers.length;
console.log(`The average of all values is ${average}`);

//4. With the same code as in the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] > 20) {
        console.log(`Numbers[${i}](${numbers[i]}) value greater than 20`);
    } else {
        console.log(`Numbers[${i}](${numbers[i]}) value less than or equal to 20`);
    }
}

//5. Using for, find out which is the highest value contained in the array and print it;
let highestValue = 0;
let highestPosition = 0;
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] > highestValue) {
        highestValue = numbers[i];
        highestPosition = i;
    }
}
console.log(`The highest value is ${highestValue} found at ${highestPosition} position.`);

//6. Find out how many odd values ​​are in the array and print the result. If none exist, print the message: "no odd values ​​found";
let oddCount = 0;
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] % 2 === 0) {
        oddCount += 1;
    } 
}
if (oddCount > 0) {
    console.log(`There is ${oddCount} odd values.`);
} else {
    console.log(`No odd values ​​found.`);
}

//7. Using for, find out what is the lowest value contained in the array and print it;
let lowestValue = numbers[0];
let lowestPosition = 0;
for (let i = 1; i < numbers.length; i+=1) {
    if (numbers[i] < lowestValue) {
        lowestValue = numbers[i];
        lowestPosition = i;
    }
}
console.log(`The lowest value is ${lowestValue} found at ${lowestPosition} position.`);

//8. Using it for, create an array that goes from 1 to 25 and print the result;
let numbers25 = [];
for (let i = 0; i < 25; i+=1) {
    numbers25[i] = i + 1;
}
console.log(numbers25);

//9. Using the array created in the previous exercise, print the result of dividing each of the elements by 2.
for (let i = 0; i < numbers25.length; i+=1) {
    let result = numbers25[i] / 2 ;
    console.log(`The division of ${numbers25[i]} by 2 is: ${result}`);
}