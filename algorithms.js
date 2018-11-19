//prints all numbers between 1 and 255
function print1_255(){
	for(var i =1; i <= 255; i++){
		console.log(i);
	}
}

//print odd numbers between 1 and 255
function print_odds(){
	for(var i =1; i <=255; i++){
		if(i%2 != 0){
			console.log(i);
		}
	}
}

//print the number being added and the running sum from 0-255
function print_running_sum(){
	var sum = 0;
	for(var i = 0; i<=255; i++){
		sum += i;
		console.log(i);
		console.log(sum);
	}
}

//print the entire contents of an array
function print_array(array){
	for(var i =0; i< array.length; i++){
		console.log(array[i]);
	}
}

//print the maximum value in an array
function print_max(array){
	var max = array[0];
	for(var i =1; i<array.length;i++){
		if(array[i] > max){
			max = array[i];
		}
	}
	console.log(max);
}

//print the average of an array
function print_average(array){
	var sum = array[0];
	var average;
	for(var i =1; i<array.length; i++){
		sum += array[i];
	}
	average = sum/array.length;
	console.log(average)
}

//make an array of all the odd numbers between 1 and 255
function array_of_odds(){
	var result =[];
	for(var i = 0; i <=255; i++){
		if(i%2 != 0){
			result.push(i);
		}
	}
	return result;
}

//square all the elements in an array
function square_array(array){
	for(var i = 0; i < array.length; i++){
		array[i] = array[i]*array[i];
	}
	return array;
}

//print the number of elements in an array greater then Y.
function greater_thanY(array,y){
	var count = 0;
	for(var i =0; i <array.length; i++){
		if(array[i] > y){
			count++;
		}
	}
	console.log(count);
}

//replace all negative numbers in the array with 0.
function zero_out_negatives(array){
	for(var i =0; i <array.length; i++){
		if(array[i] < 0){
			array[i] = 0;
		}
	}
	return array;
}

//print the max, min and average values in an array.
function print_max_min(array){
	var max = array[0];
	var min = array[0];
	var sum = array[0];
	var average;
	for(var i =1; i < array.length; i++){
		if(array[i] > max) {
			max = array[i];
		}
		if(array[i] < min){
			min = array[i];
		}
		sum += array[i]

	}
	average = sum/array.length;
	console.log(min);
	console.log(max);
	console.log(average);
}

//shift everything in the array to the left. Replace the last element in the array with a 0.
function shift_left(array){
	for(var i = 0; i < array.length-1; i++){
		array[i] = array[i+1];
	}
	array[array.length-1] = 0;
	return array;
}

//replace negative numbers in the array with "Dojo".
function swap_negatives_dojo(array){
	for(var i =0; i<array.length; i++){
		if(array[i] < 0){
			array[i] = 'Dojo';
		}
	}
	return array;
}
//InsertAt takes an index to insert at and a value to insert at the 
//specified index
function insertAt(array,index,value){
	array.push(value);

	for(let i = array.length-1; i > index; i--){
		array[i] = array[i-1];
	}

	array[index] = value;

}

//Removes the item at a  specific index
function removeAt(array,index){

	for(let i = index; i < array.length-1; i ++){
		array[index] = array[index+1];
	}

	array.pop();
}

function pushFront(array,value){
	array.push(0);

	for(let i = array.length-1; i > 0; i--){
		array[i] = array[i-1];
	}

	array[0] = value;
}

function popFront(){
	let temp = array[0];

	for(let i = 0; i < array.length-1; i++){
		array[i] = array[i + 1];
	}

	array.pop();
	return temp;
}

function reverse(arr){
	let startIndex = 0;
	let endIndex = arr.length-1;

	while(startIndex < endIndex) {
		let temp = arr[startIndex];
		arr[startIndex] = arr[endIndex];
		arr[endIndex] = temp;

		startIndex++;
		endIndex--;
	}
}

//Given an unsorted array.
function removeDuplicates(arr){
	arr.sort();

	for(let i = 0; i < arr.length-1; i++){
		if(arr[i+1] == arr[i]){
			removeAt(arr,i + 1);
		}
	}
}

function isSupervolcaic(str){
	var lowercase = str.lower()
	var vowels = {a:0,e:0,i:0,o:0,u:0}

	for(var i =0; i<lowercase.length; i++){
		if(lowercase[i] == 'a' || lowercase[i] == 'e' || lowercase[i] == 'i' || lowercase[i] == 'o' || lowercase[i] == 'u'){
			if(vowels[lowercase[i]] == 1){
				return false;
			}
			vowels[lowercase[i]]++;
		}
	}

	for(letter in vowels){
		if(vowels[letter] == 0){
			return false;
		}
	}

	return true;
}

//Determines whether a string is a palendrome or not.
//Returns true if the string is a palendrome or false otherwise
function isPalendrome(str){
	start_index = 0;
	end_index = len(str) -1;

	while(start_index > end_index){
		if(str[start_index] !== str[end_index]){
			return false;
		}
		start_index ++;
		end_index --;
	}
	return true;
}

// console.log(isPalendrome("racecar"));

function removeSpaces(str) {
	var removed_spaces = ''

	for(var i = 0; i < str.length; i++){
		if(str[i] != ' '){
			removed_spaces += str[i];
		}
	}

	return removed_spaces;
}

function accronym(str){

}

function changeMatrixValue(matrix,value){
	for(var row = 0; row < matrix.length; row++){
		for(var col = 0; col < matrix[row].length; col++) {
			if(matrix[row][col] != value){
				matrix[row][col] =value;
			}
		}
	}
	return matrix;
}

//Print Roman Numerals given a number
function printRomanNumerals(number){
	if(type(number) == number){
		var romanNumeral = "";
		var romanNumeralValues ={
			'M':1000,
			'CM':900,
			'D':500,
			'CD':400,
			'C':100,
			'XC':90,
			'L':50,
			'XL':40,
			'X':10,
			'IX':9,
			'V':5,
			'IV':4,
			'I':1
		}

		var romanNumeralOrdered = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

		for(var i =0; i < romanNumeralOrdered.length;i++){
			while(number > romanNumeralValues[romanNumeralOrdered[i]]){
				romanNumeral += romanNumeralOrdered[i];
				number -=romanNumeralValues[romanNumeralOrdered[i]];
			}
		}
	}
}

function splice(arr, indx, value){
	arr.push(value);
	for(let i = arr.length-1; i > indx; i--){
		arr[i] = arr[i-1];
	}

	arr[indx] = value;

	return arr;
}

arr = [1,2,3,4];

function removeNegatives(arr) {
	for(let i = 0; i <= arr.length; i++){
		
		if(arr[i] < 0){
			for(let j = i; j < arr.length-1 ; j++){
				
				arr[j] = arr[j+1];
			}
			
			arr.pop();
			i--;
		}
	}
	
}

// removeNegatives([-1,-3,-2,-5,-8,-9]);

// function quickSortInitial(arr){
// 	console.log("I'm TOP Quicksort");
// 	quickSort(arr, 0, arr.length -1);
	
// }

// function quickSort(arr, leftIndex, rightIndex){
// 	console.log("I'm LOWER Quicksort");
// 	console.log(leftIndex + " " + rightIndex);
// 	if(leftIndex >= rightIndex){
// 		return;
// 	}

// 	let pivotIndex = Math.floor((leftIndex + rightIndex) /2);

// 	let sortedIndex = partition(arr, leftIndex, rightIndex, pivotIndex);

// 	quickSort(arr, leftIndex, sortedIndex - 1);
// 	quickSort(arr, sortedIndex, rightIndex);
// }

// function partition(arr, leftIndex, rightIndex, pivotIndex){
// 	console.log("I'm in PARTITION!");
// 	console.log( leftIndex +" "+ rightIndex)
// 	while(leftIndex <= rightIndex){
// 		while(arr[leftIndex] < arr[pivotIndex]){
// 			leftIndex++;
// 		}

// 		while(arr[rightIndex] > arr[pivotIndex]){
// 			rightIndex--;
// 		}
// 		console.log("left and right before swap: " + leftIndex + " " + rightIndex);
// 		if(arr[leftIndex] < arr[rightIndex]){
// 			var temp = arr[leftIndex];
// 			arr[leftIndex] = arr[rightIndex];
// 			arr[rightIndex] = temp;

// 			leftIndex++;
// 			rightIndex--;
// 		}
// 	}

// 	return leftIndex;
// }

// quickSortInitial([1,5,10,3,9,2]);

function mergeSort(arr){
	if(arr.length == 1){
		return arr;
	}

	let halfwayIndex = Math.floor(arr.length/2);
	let leftside = arr.slice(0,halfwayIndex);
	let rightside = arr.slice(halfwayIndex);

	let left = mergeSort(leftside);
	let right = mergeSort(rightside);

	return mergeTwoArrays(left, right);
}

function mergeTwoArrays(arr1,arr2){
	let pointer1 = 0;
	let pointer2 = 0;
	let result = [];

	while(pointer1 < arr1.length && pointer2 < arr2.length){
		// console.log(pointer1);
		// console.log(pointer2);
		// console.log(" ");
		if(arr1[pointer1] <= arr2[pointer2]) {
			result.push(arr1[pointer1]);
			pointer1++;
		} else if (arr2[pointer2] < arr1[pointer1]){
			result.push(arr2[pointer2]);
			pointer2++;
		}
	}

	if(pointer2 == arr2.length){
		while(pointer1 < arr1.length){
			result.push(arr1[pointer1]);
			pointer1++;
		}
	} else if(pointer1 == arr1.length){
		while(pointer2 < arr2.length){
			result.push(arr2[pointer2]);
			pointer2++;
		}
	}
	console.log(result);
	return result;
}

// mergeTwoArrays([1,5,10],[2,4,7,9,15]);
// mergeSort([1,4,10,2,23,5,17]);

function bubbleSort(arr){
	let Swap = true;
	let index = 0;

	while(Swap){
		madeSwap = false;
		while(index < arr.length -1){
			if(arr[index] > arr[index + 1]){
				let temp = arr[index];
				arr[index] = arr[index+1];
				arr[index+1] = temp;
				madeSwap = true;
			} 
			index++;
		}
		if(!madeSwap) {
			Swap = false;
		}
		index = 0;
	}

	return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));


//Finds the fibonacci number iteratively 
function fib(n) {
    if(n == 0 || n == 1){
        return n;
    }

    let previousNumber = 0;
    let currentNumber = 1;

    for(let i = 2; i <= n; i++){
        let temp = previousNumber;
        previousNumber = currentNumber;
        currentNumber = temp + currentNumber; 
    }

    return currentNumber;

}

//Given a singly-linked list, determine whether 
//it is cirular or not.
function circular(list) {

    let walker = list.head;
    let runner = list.head;

    while(runner != null){
        walker = walker.next;
        if(runner.next != null){
            runner = runner.next.next;
        } else {
            runner = runner.next;
        }

        if(walker == runner){
            return true;
        }

        
    }

    return false;

}

//Reverses an Integer using javaScript built in functions.
//Returns the reversed number.
function reverseInt(n){
	const reversedNum = n
		.toString()
		.split('')
		.reverse()
		.join('');

	return parseInt(reverseNum) * Math.sign(n);
}

//Find the most frequently used Character in a string.
//Returns that character
function maxChar(str) {
    let lettersCount = {};
    let max = 0;
    let freqChar = "";

    for(let char of str){
        
        if(lettersCount[char]){
            lettersCount[char]++;
        } else {
            lettersCount[char] = 1;
        }
         
    }

    for (let char in lettersCount){
        if(lettersCount[char] > max){
            freqChar = char;
            max = lettersCount[char];
        }
    }
    return freqChar;
}

//Divides an array into chunks based on a specified size.
//Makes use of javascript splic function to do so.
function chunk(array, size) {
    let result = [];
    let endIndex = size;

    for(let i = 0; i < array.length; i + size) {
        let small = array.splice(i,size);
        result.push(small);
        endIndex += size;
    }

    return result;
}

//Divides an array into chunks based on a specified size.
//Does not use the built in splice function.
function chunk(array, size) {
    let result = [];
    
    for(let i = 0; i < array.length; i++) {
		const recent = result[result.length -1];
		
		if(!recent || recent.length === size) {
			result.push([recent]);
		} else {
			recent.push(array[i]);
		}
    }

    return result;
}


//Anagrams broken up into two functions.
//determines if two strings are anagrams of each other.
//Ignores punctuation and capitalization.
function anagrams(stringA, stringB) {
    let MapA = createMap(stringA);
    let MapB = createMap(stringB);
    
    if(Object.keys(MapA).length != Object.keys(MapB).length){
        return false;
    }
    for(let key in MapA){
        if(MapA[key] != MapB[key]){
            return false
        }
    }
    return true;
}

function createMap(str){
    let replaced = str.replace(/[\W]/g,'').toLowerCase();
    let charMap = {};

    for(let char of replaced){
        charMap[char] = charMap[char] + 1 || 1;
    }
    console.log(charMap);
    return charMap;
}

//Capitalizes the first letter of each word in a sentence.
function capitalize(str) {
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();
        let upperWord = letters.join('');
        words[i] = upperWord;
    }

    return words.join(" ");
}