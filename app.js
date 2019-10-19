/*
const reverseStr = str => {
	const strArr = str.split("");
	const reversedArr = strArr.reverse();
	const reversedStr = reversedArr.join("");

	return reversedStr;
};
*/

// Second way of doing it, old way, iterating and concatenating it

const reverseStr = str => {
	let final = "";
	for (let i = str.length - 1; i >= 0; i--) {
		final += str[i];
	}
	return final;
};

// Factorial of a number

const factorialize = num => {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		// concatenate the results of each iteration to the variable
		result *= i;
	}
	return result;
};

// Palindrome word , return true if it's a Palindrome

const palindrome = str => {
	const reg = /[\W_]/g;

	const reverseFix = str.toLowerCase().replace(reg, "");

	const reverseStrArr = reverseFix
		.split("")
		.reverse()
		.join("");

	if (reverseStrArr === str) return true;

	return false;
};

// Get the longest word

const findLongestWord = str => {
	// Get the string and make it an array with separated values (words)
	const words = str.split(" ");
	let longest = "";

	for (let word of words) {
		if (word.length > longest.length) {
			longest = word;
		}
	}

	return longest;
};

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Title case sentence

const titleCase = str => {
	const words = str.toLowerCase().split(" ");

	// for (let i = 0; i < words.length; i++) {
	// 	words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	// }

	// return words.join(" ");

	const result = words.map(elem => {
		return elem[0].toUpperCase() + elem.slice(1);
	});

	return result.join(" ");
};

// console.log(titleCase("I am a little tea pot"));

// Largest of four

// const largestOfFour = arr => {
// 	let maxes = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let tempMax = arr[i][0];
// 		for (let j = 0; j < arr[i].length; j++) {
// 			let currentElement = arr[i][j];
// 			if (currentElement >= tempMax) {
// 				tempMax = currentElement;
// 			}
// 		}
// 		maxes.push(tempMax);
// 	}

// 	return maxes;
// };

function largestOfFour(arr) {
	for (let i = 0; i < arr.length; i++) {
		tempMax = [];
		for (let j = 0; j < arr[i].length; j++) {
			tempMax = arr[i].sort((a, b) => b - a);
		}
		return tempMax;
	}
}

// console.log(
// 	largestOfFour([
// 		[4, 5, 1, 3],
// 		[13, 24, 18, 26],
// 		[32, 35, 37, 39],
// 		[200, 2002, 857, 1]
// 	])
// );

// ARRAY CHUNKING

function chunkArray(arr, len) {
	// Init chucked arr
	let chunkedArr = [];
	// set index
	let i = 0;

	// Loop while index is less than the arr length
	while (i < arr.length) {
		// Slice out frmo the index to the index + the chunk length and push onto the chunk array
		chunkedArr.push(arr.slice(i, i + len));
		// Increment by the chunk length
		i = +len;
	}

	return chunkedArray;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

// 	CHALLENGE: CAPITALIZE THE LETTERS OF A STRING

function capitalizeLetter(str) {
	/*
	const strArr = str.toLowerCase().split(" ");
	for (let i = 0; i < strArr.length; i++) {
		strArr[i] =
			strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
	}

	return strArr.join(" ");
	*/

	// Most elegant way to do it
	/*
	return str
		.toLowerCase()
		.split(" ")
		.map(word => word[0].toUpperCase() + word.substr(1))
		.join(" ");
	*/

	// Third way of solving it
	return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// console.log(capitalizeLetter("i love javascript"));

// CHALLENGE 5 - MAX CHARACTER
function maxCharacter(str) {
	const charMap = {};
	let maxNumb = 0;
	let maxChar = "";

	str.split("").forEach(char => {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});

	// Loop through an object
	for (let char in charMap) {
		if (charMap[char] > maxNumb) {
			maxNumb = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

// console.log(maxCharacter("Javascripttttt"));

// CODING CHALLENGE: CHECK IF END OF STR MATCHES WITH THE TARGET PARAMETER

function confirmEnding(str, target) {
	// return str.endsWith(target);

	/*
    if (str.substr(-target.length) === target) {
        return true;
    }

    return false;
    */

	// This is a shorter method

	return str.substr(-target.length) === target;
}

// console.log(confirmEnding("sebatian", "n"));

// CODING CHALLENGE: FIZZ BUZZ

function fizzBuzz() {
	for (let i = 0; i < 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 5 === 0) {
			console.log("Fizz");
		} else if (i % 3 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

// fizzBuzz();

////// CODING CHALLENGE : CHECK IF BOTH STRS ARE ANAGRAMS

function isAnagram(str1, str2) {
	return formatStr(str1) === formatStr(str2);
}

// Helpfer function to strip away spaces and trash

function formatStr(str) {
	return str
		.replace(/[^\w]/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");
}

console.log(isAnagram("elbow", "below"));

// LEARNING OF ANAGRAM CHALLENGE: as long as you can strip away the space and just make sure that both strings have the exact same letters, you'll pass the test. The way it's given to you makes you think that you have to compare the strings to all the words out there.
