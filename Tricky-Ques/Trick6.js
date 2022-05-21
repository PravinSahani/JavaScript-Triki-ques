console.log(0.1 + 0.2);//It prints 0.30000000000000004
console.log(0.1 + 0.2 == 0.3);// prints False 

//Solution for that problem.
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));