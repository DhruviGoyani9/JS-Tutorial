let a=12;
console.log("isNan --> " + isNaN(a));
console.log("isFinite --> " + isFinite("1"));
console.log("isInteger --> " + Number.isInteger(5.2));
console.log("isSafeInteger --> " + Number.isSafeInteger(-45.6));
console.log("parseFloat --> " + parseFloat("10.56 year"));
console.log("ParseInt --> " + parseInt(10.65));
let n = 5.24556;
console.log("toExponential --> " + n.toExponential());
console.log("toFIxed --> " + n.toFixed(2));
console.log("toPrecision --> " + n.toPrecision(3));
console.log("toSTring --> " + n.toString(2));
console.log("ValueOf --> " + n.valueOf());
num = 1000000000
console.log("toLocalString --> " + num.toLocaleString("en-US",{style:"currency", currency:"USD"}))

