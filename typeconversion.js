let result;
result = '3' + 2;
console.log(result);

result = '5' + true;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '5' + null;
console.log(result);

result = '5' + 2;
console.log(result);

result = '5' - 2;
console.log(result);

result = '5' * '2';
console.log(result);

result = 'hello' - 'world';
console.log(result);

result = '4' - true;
console.log(result);

result = 4 + undefined;
console.log(result);

//Explicit convesion

result = Number('324') + 1;
console.log(result);

result = Number('324e-2');
console.log(result);

result = Number(true);
console.log(result);

result = Number(' ');
console.log(result);

result = Number('hi');
console.log(result);

result = parseInt('30.02');
console.log(result);

result = parseFloat('30.02');
console.log(result);

result = String(324 + 1);
console.log(result);

result = (123).toString();
console.log(result);

console.log(Boolean('ef'));