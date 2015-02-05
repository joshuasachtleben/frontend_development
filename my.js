/*Extra Credit
Fizz Buzz

Write a program that loops through the numbers 1 through 100. Each number should be printed to the console, using console.log(). However, if the number is a multiple of 3, don't print the number, instead print the word "fizz". If the number is a multiple of 5, print "buzz" instead of the number. If it is a multiple of 3 and a multiple of 5, print "fizzbuzz" instead of the number.

Hint. Use loops and if/else statments. In javascript the % is the modulo, or remainder operator. a % b evaluates to the remainder of a divided by b. 11 % 3 is equal to 2.*/

console.log("Before");

for (var counter = 100; counter >= 1; counter = counter - 1) {
    if (counter % 5 == 0 && counter % 3 == 0) {
        console.log("fizzbuzz");
    }
    
    else if (counter % 3 == 0) {
        console.log("fizz");
    }
        
    else if (counter % 5 == 0) {
        console.log("buzz");
    }
   
    else {
        console.log(counter);
    }
} 
console.log("After");


