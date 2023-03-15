const string = 'Find me';
const pattern = /me/;

//match in a string and returns the index of the match. It returns -1 if the search fails.
const result1 = string.search(pattern);
console.log(result1);

// replace the character with another character
const string1 = 'Find me';
console.log(string1.replace(pattern, 'found you'));

// splitting strings into array elements
const regex1 = /[\s,]+/;
const result2 = 'Hello world! '.split(regex1);
console.log(result2); // ['Hello', 'world!', '']

//Exec() -> Executes a search for a match in a string and returns an array of information. It returns null on a mismatch.
// searching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result3 = regex2.exec('My phone number is: 555 123-4567.');
console.log(result3);

