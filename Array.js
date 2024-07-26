const myArray=[2,3,4,5,8];
console.log(myArray);
console.log(myArray[0]);

//Add value in array
myArray.push(3);
myArray.push(5);
console.log(myArray);

//another way to declare array
const myArray1=new Array(1,2,3,4,5,67,77);
console.log(myArray1[2]);
console.log(myArray1);

const myArray2=[2,3,4,5,8];
//Remove last value in Array
myArray2.pop();
console.log(myArray2);

const myArray3=[2,3,4,5,8];
//Add value in 1 position in Array
myArray3.unshift(86);
console.log(myArray3);

const myArray4=[4,8,9,10,4];
//remove first value in array
myArray4.shift();
console.log(myArray4);
//check the value in array
const myArray5=[4,8,9,10,4];
console.log(myArray5.includes(9));
console.log(myArray5.indexOf(10));
//convert array into string
const myArray6=myArray5.join();
console.log(myArray6);
console.log(typeof myArray6);

const myArray7=["Ameer Hamza","Zubair","Dawood"];
const myArray8=["karachi","Hyderabad","Lahore"];
myArray7.push(myArray8);
console.log("----------------");
console.log(myArray7);
console.log("----------------");
console.log(myArray7[0]);
console.log("----------------");
console.log(myArray7[3][1]);
console.log("----------------");
//concat operator
const myArray9=["Ameer Hamza","Zubair","Dawood"];
const myArray10=["karachi","Hyderabad","Lahore"];
const myArray11=myArray9.concat(myArray10);
console.log(myArray11);
//spread operator
console.log("----------------");
const myArray12=["Ameer Hamza","Zubair","Dawood"];
const myArray13=["karachi","Hyderabad","Lahore"];
const myArray14=[1,2,3];
const myArray15=[...myArray12,...myArray13,...myArray14];
console.log(myArray15);
console.log("----------------");
const array16=[1,2,3,[4,5,6],7,[8,9,[10,11]]];
const array17=array16.flat(Infinity);
console.log(array17);

console.log("----------------");
//check it is array
console.log(Array.isArray("Ameer Hamza"));
console.log("----------------");
//convert into array
console.log(Array.from("Ameer Hamza"));
console.log("----------------");
console.log(Array.from({Name:"Ameer Hamza"}));//interview question
console.log("----------------");
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));








