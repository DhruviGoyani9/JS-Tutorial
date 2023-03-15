
//length
console.log('length');
var a = [10, 20, 30];
console.log(a.length);

//shift : remove element from beginning of array
console.log('shift');
var sh = [10, 20, 30, 40];
console.log(sh.shift());
console.log(sh);

var sha = [];
console.log(sha.shift());

//unshift : add element beginning of array
console.log('unshift');
var unsh = [10, 20, 30, 40];
console.log('-- ', unsh.unshift('45', 55));
console.log(unsh);

//pop: pop element from end of array
console.log('pop');
var p = [10, 20, 50];
console.log(p.pop());
console.log(p);

//push : push element at the end of array
console.log('push');
var pu = [10, 20, 30, 40];
console.log(pu.push(23, '67'));
console.log(pu);

//indexof : return index of element
console.log('indexOf');
var i = [10, 20, 30];
console.log(i.indexOf(30));
console.log(i.indexOf(50)); //-1

//lastindexOf : return last occurence of element
console.log('lastIndexOf');
var li = [10, 30, 20, 40, 50, 20, 40, 30];
console.log(li.lastIndexOf(30));
console.log(li.lastIndexOf(20));

//includes : check element is there or not
console.log('includes');
var inc = [10, 20, 30, 40];
console.log(inc.includes(30));//true
console.log(inc.includes(100));//false

//join : add string between elements
console.log('join');
var jo = [10, 30, 20, 40, 50, 20, 40, 30];
console.log(jo.join('-'));
console.log(jo.join('0'));

//reverse : reverse array
console.log('reverse');
var rev = [10, 20, 30, 40, 50];
console.log(rev.reverse());

//concat : concat two array
console.log('concat');
var arr = [10, 20, 30];
console.log(arr.concat(40, 50));

//foreach : print each array element in new line
console.log('foreach');
var arr = [10, 20, 30];
var foarr = [10, 20, 30];
foarr.forEach(function (value, index) {
    console.log(value);
});

//find
var findar = [10, 30, 40, 10, 50, 20];
var ever = findar.find(function (value, index) {
    return value >= 40;
})
console.log("find", ever);
//findIndex
var findar = [10, 30, 40, 50, 20];
var ever = findar.findIndex(function (value, index) {
    return value > 10;
})
console.log("IN=", ever);

//every : returns true if all elements satisfies the condition
console.log('every');
var everyar = [10, 30, 40, 50, 20];
var ever = everyar.every(function (value, index) {
    return value > 60;
})
console.log(ever);

//some : returns true if minimum one element satisfies the condition
console.log('some');
var somear = [10, 30, 40, 50, 20];
var someer = somear.some(function (value, index) {
    return value > 30;
})
console.log(someer);

//filter : returns new array as per condition satisfied
console.log('filter');
var fiar = [10, 30, 40, 50, 20];
var filer = fiar.filter(function (value, index) {
    return value > 35;
})
console.log(filer);

//slice : returns selected array elements as a new array 5-2=3 print 3 elements
console.log('slice');
var sl = [10, 20, 30, 40, 50, 60];
console.log(sl.slice(1, 3));
console.log("SL Values = ", sl)

//splice : first arg- starting position,sec arg - howmany element remove,third arg- insert elements instead of removed element
console.log('splice');
var slp = [10, 20, 30, 40, 50, 60];
console.log(slp.splice(3, 0, 45));
console.log(slp);

//fill
var fillar = [10, 20, 30, 40];
console.log("Fill Array -> ", fillar.fill('a', 1, 2));

//map : perform operation on each and every array element
//without using map
console.log('without map');
var m = [1, 2, 3];
let area = [];
let are;
for (let i = 0; i < m.length; i++) {
    are = m[i] * 7;
    area.push(are);
}
console.log(area);

//with using map
console.log('map');
var mapa = [1, 2, 3, 4, 5];
var mm = mapa.map(function (value, index) {
    return value * 9;
})
console.log("MM = ", mm);

//multidimesion

let marray = [[1, 1], [2, 2]];
console.log(marray);
marray.push([3, 3]);
console.log(marray);

marray.forEach((arr) => {
    arr.forEach((data) => {
        console.log(data);
    })
})

marray.forEach(element => {
    console.log(element);
});

for (const key in marray) {
    console.log("for in --> " + marray[key]);
}

for (const element of marray) {
    console.log("for of--> " + element);
}

let str = 'dhruvi';

for (let i of str) {
    console.log(i);
}

console.log(typeof str)

delete str;

console.log(str)

const array = ['geeksforgeeks', 'geeksfor',
    'geeks', 'dg'];

console.log('geeksfor' in array);
console.log(3 in array);
console.log('length' in array);
console.log('key' in array)
