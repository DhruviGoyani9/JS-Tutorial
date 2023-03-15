let text1 = 'hello How are you?';
let text2 = 'world\\';
let text3 = '             \t\vjava script      ';

console.log(text1);
console.log(text2);
console.log(text3);

//charAt : returns the character at specified index
console.log(text1.charAt(1));

//concat : joins two or more strings
console.log(text1.concat(text2));

//replace : replace string with another string
console.log(text1.replace("hello", "hiii"));

//split : convert the string to an array of string
console.log(text1.split(" "));

//substr : returns the part of string.. first arg:start index,sec arg: length of string how many character should be display
console.log("substr-->", text1.substr(3, 5));

//substring : returns the part of string... fisrt arg:start index , sec arg:end index ,exclude last index
console.log("substring -->", text1.substring(2, 7));

//slice : returns the part of string... first arg:start,sec arg: end same as subbstring
console.log("SLICE()--->", text1.slice(2, 7));

//toLowerCase : returns string in lower case
console.log(text1.toLowerCase());

//toUpperCase : returns String in uppercase
console.log(text1.toUpperCase());

//trim : remove whitespace from string
console.log(text3.trim());

//includes : search for a string and returns a boolean value
console.log(text1.includes('How'));

//search : search for a string and returns a position of a match
console.log(text1.search('e y'));

