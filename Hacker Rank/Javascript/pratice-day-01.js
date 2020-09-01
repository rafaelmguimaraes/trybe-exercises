/* Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of n!. */

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i+=1) {
        result *= i;
    }
    return result;
};

console.log(factorial(4));