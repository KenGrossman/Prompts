//Prompt 1
//Given an int n
//Make an array with n elements that when summed adds to 0

//Seed run with a random number
var n = Math.floor(Math.random() * 101);
console.log("Value of n: " + n);

summableArray = arrayBuilder(n);

console.log("Elements in array: " + summableArray.length);
console.log("Sum of all elements: " + sumArray(summableArray));

function arrayBuilder(num){
	//Build an array
	let myArray = [];

	//If array is odd add a zero to balance array
	if(num%2 != 0){
		myArray.push(0);
	}

	//Add positive and negative i to array
	for(let i = 1; i <= num/2; i++){
		myArray.push(i);
		myArray.push(-i);
	}

	return myArray;
}

function sumArray(summableArray){
	var sum = 0;
	
	for (i in summableArray){
		sum += summableArray[i];
	}

	return sum;
}