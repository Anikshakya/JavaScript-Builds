// console.log('hello world');

// // values and variables
// var myName = 'anik shakya';
// // declaration and case sensetive
// var _myAge = 21;
// console.log(myName);
// console.log(_myAge);


// // data types 
// var myName1 = 'anik';
// console.log(typeof(myName));

// var aNumber = 78;
// console.log(typeof(aNumber));

// // var iAmAnik = true;
// // console.log(iAmAnik);
// // console.log(typeof(iAmAnik));


// // console.log(10 + "20");
// // console.log(9 - "5"); //bug
// // console.log(' ' + 0);
// // console.log('' + '');
// // console.log("anik" + "nimisa");
// // console.log('anik' - 'shakya');


// // var f = true + true;
// // var g = true + false;
// // var h = true - true;
// // var i = false + true;
// // var j = false - true;
// // console.log(f, g, h, i, j);

// var houseIsEmpty = null;
// console.log(houseIsEmpty);

// var _nothing;
// console.log(_nothing);

// var _null = null;
// console.log(_null);
// console.log(typeof(_null)); //2nd bug in javascript

// console.log(isNaN(987872783)); //isNaN() function can be use to validate form e.g is given below
// console.log(isNaN('anik'));
// // e.g 

// var _phoneNumber = '9s';
// if(isNaN(_phoneNumber) ){
//     console.log('Enter a valid phone number');
// }else{
//     console.log('Valid numver');
// }

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));


// arithmectic operators and expression
// x + y =0; is expression

// console.log(5 + 20);
// console.log(5 + 20);
// console.log(5 + 20);
// console.log(5 + 20);
// console.log(5 + 20);

//increment and decrement operator
// x++(postfix)or ++x(prefix), x-- or --x;

// var num = 14;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

// var _newNum = --num - 4;
// console.log(_newNum);


// var a = 20;
// var b = 22;
// console.log(a == b);
// console.log(a!= b);
// console.log(a>b);
// console.log(a<b);
// console.log(b>a);
// console.log(b>=a);


// var a=20;
// var b=-30;
// and operator
// if(a>b && b < a && b< 0 && b<-10){
//     console.log('ok');
// }else{
//     console.log('not ok');
// }

// if (a=b || b<0 || b<=-30){
//     console.log('msta');
// }else{
//     console.log('khatam');
// }

// console.log(3**3);

// write a program to swap two numbers
// var a = 12;
// var b = 13;

// c= b;
// b=a;
// a=c;
// console.log('the value of a is: ' + a);
// console.log('the value of b is: ' + b);

// without using a third variable
// a = a+b;
// b = a-b;
// a = a-b;
// console.log('the value of a is: ' + a);
// console.log('the value of b is: ' + b);

// difference between == and ===
// == checks the value whereas === checks value and datatype
// e.g 
// var a = 5;
// var b = '5';
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a==b);
// console.log(a===b);



//conditional statement
// if else
// var _weather = 'foggy';
// if(_weather == "rain"){
//     console.log('Take an umberella');
// }else{
//     console.log('dont take an umberella');
// }


// LEAP YEAR CALCULATION
// leap year is such a year which is divisivle by 4 and diviible by both 100 & 400 at the same time
// var _year = 2100;
// debugger;
// if(_year % 4 ==0){
//     if (_year % 100 ==0 ) {
//         if (_year % 400 ==0) {
//             console.log('The year ' + _year + ' is a leap year.');
//         }else{
//             console.log('The year ' + _year + ' is not a leap year.');
//         }
//     }else{
//         console.log('The year ' + _year + ' is a leap year.');
//     }
// }else{
//     console.log('The year ' + _year + ' is not a leap year.');
// }






// ternary operator
// it requires 3 operands
// var age =18;

// if (age>=18) {
//     console.log('You are eligible to vote');
// }else{
//     console.log('You are not eligible to vote');
// }

// var age = 17;
// console.log((age>=18) ? "You can vote":"You can't vote");

// var weather = 'sunny';
// console.log((weather = 'sunny') ? "its a good day":'its not a good day');








// SWITCH

// without using switch
// var area = 'triangle';

// PI =3.14, l=3, b=7, r=4;

// if (area =='circle') {
//     console.log('The area a circle is: ' + PI*r**2);
// }else if (area =='triangle') {
//     console.log('The area a triangle is: ' + (l*b)/2);
// }else if (area =='rectangle') {
//     console.log('The area a rectangle is: ' + (l*b));
// }

// using switch
// var area = 'triangldfe';

// PI =3.14, l=3, b=7, r=4;

// switch(area){
//     case 'circle':
//         console.log('The area a circle is: ' + PI*r**2);
//         break;

//     case 'triangle':
//         console.log('The area a triangle is: ' + (l*b)/2);
//         break;

//     case 'rectangel':
//         console.log('The area a rectangle is: ' + (l*b));
//         break;

//     default:
//         console.log("Enter a valid value");
//         break;

// }







// WHILE loop
// var num = 0;
// while (num <=10) {
//     console.log('i am super');
//     num++;
// }

//do while
//ih this loop the conditon is checked after the block scope is exuted.
// var num = 11;

// do{
//     console.log('i love you');
//     num++;
// }while (num <=10)










//FOR LOOP
// for(var num = 0; num<= 10;){//infinite loop as increment is not given
//     console.log('i love nimisa');
// }

// for loop pratice
// program to print multiplication table for given number (8, 9, 12, 15) using loop

// var x=8;
// for(var num = 0; num<= 12; num++){
//     console.log(x + ' x ' + num + ' = ' + (x*num));
// }






// FUNCTIONS in JavaScript
//block of reuseable code used to perform certain task

// var a = 12, b=23;
// var sum = a+b;
// console.log(sum);//not the correct way


// function sum(a, b){
//     var total = a+b;
//     console.log(total);
// }
// sum(200, 500);


// function parametera vs function arguments
//function parametes are declared while creating a function i.e function sum(s, b){} Here, s and b are parameterd.
//function aruments are those when a fumction is call i.e sum(20, 40); Here 20 and 40 are arguements.



//FUMCTION EXPRESION

// function sum(a,b){
//     total = a+b;
//     console.log(total);
// }

// var funExp = sum(2,89);//storing a function call in a variable is a function expresion. Here funExp is the function expression
// but during the above sttement the function is not working propeely as it is not getting the value of the function.
//what is happening is that the colsole log inside the function is being executed but we need to assign the value of 
//the function to the function expression, below is an example

// function sum (a,b){
//     total = a+b;
//     return total;
// }
// var x = sum(23,22);//here x is the funciton expression that makes us easy to call function without the sum() everytime.
// console.log('the sum of two numers is ' + x);

// var mofo = function(a, b){
//     return total = a+b;
// }

// var sum = mofo(2,5);
// var sum1 = mofo(3, 7)
// console.log(sum < sum1);




//------------------------------------------
//MODERN JAVASCRIPT OR ECMASCRIPT 
//ES6
//LET VS CONST VS VAR

// var myName = 'anik shakya';
// console.log(myName);

// myName = 'nimisa'
// console.log(myName);

// let myName = 'anik shakya';
// console.log(myName);

// myName = 'nimisa'
// console.log(myName);

// const myName = 'anik shakya';
// console.log(myName);// const is like a primary key. this cannot be changed later on in the code.




//var => function scoope
//let => block scope

//if u use var to declare then the variable is usable evvery where, but not with let & const they are only up the their block
//i.e {let a= 10; const b=23;}  Here a and b are only useable inside that parenthesis. this is the diff btwn let var and const
// function example(){
//     let fName = 'anik';
//     console.log(fName);

//     if(true){
//         let lName = 'shakya';
//         console.log(lName);// Here the lName is only useable in this if block cause we are using let i.e block scope
//         console.log(fName);
//     }
//     console.log(lName); // here this wont give output cause lName is declared in above block& we are out of that block
// }// also when using let parent variable is usable in child part but not vice versa
// example();





//TEMPLATES LITRALS

// for(let a = 1; a<=12; a++){
//     let tableOf = 8;
//     console.log(`${tableOf} * ${a} = ${tableOf * a}`);//here ${} is the templates literalls
//     console.log(tableOf + " * " + a + ' = ' + (tableOf * a) );// old way
// }

// //DEFAUT parameters
// function multip(a, b=5){//here we passed a value to the b parameter this is called a default parameter.assigning in para
//     return a*b;
// }
// console.log(multip(4));// here i assigned a single argumeent cause a default parameter is defiened in the function.






//FAT ARROW FUNCTION

// normal way
// var sum = function (a,b){
//     return total =  a + b;
// }

// console.log(sum(2,6));

//fat arrow function =>

//to run the function first declare the function the call
// const sum = (a,b) => {//use const to declare a function
//     return `The sum of the numbers are ${a +b}`
// }
// console.log(sum(2, 6));


//another way i.e noneed to return if your function code is in one line
// const sum = (a, b) => `The sum of the numbers are ${(a=2) +(b=6)}`

// console.log(sum());








//ARRAYS IN JAVASCRIPT-----------------
//to store multiple data in singel variable we need an aray;
// we can store many data types in a single data types in javaScript unlike other programming languaes

// var names= ['anik', 'rilon' , 'shehul ', 'amit'];
// console.log(names);


//ways to create an array
// /*1..*/var names= ['anik', 'rilon' , 'shehul ', 'amit'];//we can create an array by just giving [] brackets

// /*2..*/
// var myFriends = new Array;//create a new instance of an array // OPTIONAl
// var myFriends= ['anik', 'rilon' , 'shehul ', 'amit'];//added the value to the array insance



//TRAVERSAL IN AN ARRAY
//traversal means to navigate the items in an array for displaying....etc

//to get an single data 
// var friends = ['anik','shehul', 'amit', 'rilon'];
// console.log(friends[2]);//displaying a single data of an arrray, put the index of data in the stored varialble
// console.log(friends.length);// to check the lenght of the array
// console.log(friends[friends.length - 1]);// to dispay the last element of an array


//we use for loop to naviagte an array
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita'];

// //using for loop
// for(var num = 0; num<friends.length; num++){
//     console.log(friends[num]);
// }

//for in loop[es6]
//iterate the index no of an array
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita'];
// for(let elements in friends){// elements in provides the index no of an array
//     console.log(elements);
// }

//for of loop
//iterates the value inside and array
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita'];
// for(let elements of friends){// elemenets of provides the value of elements in the array
//     console.log(elements);
// }

//for each
//arguments of for each are elements, index, Array and this

//using traditional function
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita'];
// friends.forEach(function(element, index, array){
//     console.log(`${element} : ${index}`);
// })


// using fat arrow funcion
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita'];
// friends.forEach((element, index) => {
//     console.log(`the index of ${element} is ${index}`);
// })





//ARRAY SEARCHING AND FILTERING OF ARRAY

// //Array.prototype.indexOf()
//indexOf starts to check the index from the beggining i.e from 0 index i.e forward
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita', 'ammit'];
// console.log(friends.indexOf('amit', 3));// ,3 is for serching from the index of 3, and if found same element its show the index, but if the element is is behind the initialized srach value i.e 3 then its show -1 or if no matching item.

// //lastIndexOf
// //lastIndexOf starts to check from the end i.e the last index to 0 index i.e backawards
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita', 'amit'];
// console.log(friends.lastIndexOf('amit'));//lastIndexOf returns the last index of the same value.



// //includes
// //checks wheather certain element is in the array or not
// //it returns boolean value
// //it will forward search
// var friends = ['anik','shehul', 'amit', 'rilon','euro','pranita', 'aamit'];
// console.log(friends.includes('amit'));



// //find()
//arguments of find are elements, index, Array and this
// //returns the value of element that you are searching. if the value does not exists then it returns undefined
// const prices = [200, 300, 400, 500, 600];
// const findElement = prices.find(function(element){
//     return element>300;
// })
// console.log(findElement);

// //findIndex()
//arguments of findIndex are elements, index, Array and this
// //returns the index of element that you are searching. if the value does not exists then it returns -1
// const prices = [200, 300, 400, 500, 600];
// const findElement = prices.findIndex(function(element){
//     return element>200;
// })
// console.log(findElement);



// //filter()
// //it creates an new array by filtering the previous with a condition
// ////arguments of filter() are elements, index, Array and this
// // it returns [] if the condition is not satisfied
// const prices = [200, 300, 400, 500, 600];
// const newPrices = prices.filter(function(element, index, Array){
//         return element< 500;
//     })
// console.log(newPrices);




//how to sort an array
//Array.sort()
//sorts the array, default sort will be ascending  i.e 1->12....

// //for string
// var months = ['jan', 'feb', 'apr', 'mar', 'jul', 'jun'];
// console.log(months.sort());

// //for number // but sort() will give incorrect result when sorting numbers
//  var num =[1,4,6,456,456,456,3,43,2,511,3,246,35,735,1236,658,5];
//  console.log(num.sort());





// //how to insert, add, replace , delete emelents in an array (CRUD)
// //Arrray.prototype.push()
// //adds one or more elements to the end of the array and returns the index of new array

// const animals = ['pigs', 'sheeps', 'goat'];
// const count = animals.push('chicken', 'rabbit');
// console.log(animals);
// console.log(count);

// //unshift()
// //adds one or more elements at the beggining of the array and returns the lenght of the array
// const names = ['anik', 'nimi'];
// console.log(names.unshift('nimisa'));
// console.log(names);
// //for number
// const myNumber = [1,2,3,5];
// const count1 = myNumber.unshift(4,6);
// console.log(count1);
// console.log(myNumber.sort());



//pop()
//remove the last element from the array & changes the length of the array and returns the removed element
// const plants = ['pea', 'onion', 'sunflower', 'rose'];
// console.log(plants.pop());
// console.log(plants);
// //shift()
// //removes the first ellement from the array 
// console.log(plants.shift());
// console.log(plants);




//splice()
//returns the deleted element
// const months = ['Jan', 'march','april', 'JUne', 'july'];
//1. add december to the end
// const newMonths = months.splice(months.length, 0, 'december');
// console.log(months);
// //2. return value of splice
// console.log(newMonths);//returns the deleted element
//3.update march to March
// const months = ['Jan', 'march','april', 'JUne', 'july'];
// const indexOfMonths = months.indexOf('march');
// if(indexOfMonths != -1){
//     const updateMonths = months.splice(indexOfMonths, 1, 'March');
//     console.log(months);
// }else{
//     console.log('No such data found');
// }
//4. delete june from the array
// const months = ['Jan', 'march','april', 'JUne', 'july'];
// const indexOfMonths = months.indexOf('JUne');
// console.log(indexOfMonths);

// if(indexOfMonths != -1){
//     const del = months.splice(indexOfMonths, 1)
//     console.log(months);
// }else {
//     console.log('No such data found');
// }




//map() and reduce()
//map reurns value of array creating a new array without mutating the original array but while comparing it returns boolen array so for comp use filer.
//map() is chainable i.e map().sort().fillter()
// const months = ['Jan', 'march','april', 'JUne', 'july'];
// const ar1 = [1, 4,3 ,3, 2, 3, 55, 52,33];



// const newAr1 = ar1.map((curVal, index,)=>{
//     return `The index of ${curVal} is ${index}`;
// }).sort();

// console.log(newAr1);



//find the square root of each element in an array
//multiply each element by 2 and return only those elements which is greater the 10
// const arr = [25, 36, 49, 64, 81];

// const arrSquare = arr.map((curVal)=>{
//     return Math.sqrt(curVal);
// });

// const arrMult = arrSquare.map((curVal)=> curVal*2).filter((curVal)=> curVal > 14).reduce((accumulator, curVal)=>{
//     return accumulator += curVal;// x= x+ y  is equivalent to x += y
// })

// console.log(arrSquare);
// console.log(arrMult);




// //reduce()
// //flatten 3d or 2 array to single dimensional array
// //the call back function of reduce() has accumulator,curElm, index, and array
// //to sum, avrage, percentage the array we need the reduce()
// const arr = [5, 6, 8, 2];
// let sum = arr.reduce((accumulator, curElm)=>{
//     return accumulator += curElm;// x= x+ y  is equivalent to x += y
// })
// console.log(sum);


// //2d array
// const _2dArray = [['name1', 'address1'], ['name2', 'address2'], ['name3', 'adress3']];
// //converting a 2d array into a 1d array

// const redArray = _2dArray.reduce((accum, currVal)=>{
//     return accum.concat(currVal);//concat combines two arrays i.e 'hello' + " world" = hello world 
// })
// console.log(redArray);







// //stings in jacaScript
// //string constructure string()
// let name = new String('anik');
// console.log(name);

// let name = 'anik';
// console.log(name.length);



// //ESCAPE CHRACTER
// let sentence = 'i am \'anik\' ok guys';// use \ if front of the characters that you need to ignore
// let sentenne = 'iandjfab afsdfh asdf "ahgsdfhgas"'; //to avoid error use doule quotes insie of single quoets or viceVersa








// //FINDING A STRING IN A STRING
// //index of
// let sentence = 'hello k cha sathi ho';
// let ind = sentence.indexOf('cha');//indexOf in string returns the index of the letter ot sentence, rtns -1 if no such letter
// console.log(ind);

// let sentence = 'my name is big dick joe';
// console.log(sentence.indexOf('i', 14));//seacrhes foreard bit las index searches backwards


// //search
// let sentence = 'hello k cha sathi ho';
// let srch = sentence.search('sathi');//returns the index of the 1st letter of the word, retrns -1 if the letter is not found
// console.log(srch);





//EXTRACTING THE STRING PARTS
//there are 3 ways
//slice(start, end), substring(start, end), subbstr(start, lenght)

// //slice
// let name = 'apple is a great fruit';
// let res = name.slice(0, 4);//slice starts from the initial value but does not include the end i.e the 4th index will not be shhown & the original array will notbe changed
// console.log(res);

// let fruits = 'apple, mango, banana';
// let res = fruits.slice(7, -15);// starts from 7 and goes to the end and subtracts -3, returns nothing id the substration is more
// console.log(res);

// //to display 280 characters like tweeter just do
// let texxt = 'kjsahfk a fka fgadg a fak fbnasdfhka fahsf asfk asd fgas dgf skfhgdfhgsifi asfgas fha gsf ahifg afiga fdsg siyfd yif aysif yasf aoyi ad   gaf sagf iaf af iaosgdfiog adfig aoigfwigfoqigfiqwg fiqgwifgqwoegfiwogefioqwgf oq q  gqwgifg oigwqfo qwgifoiwqgefoiqwegfiqwoefoiqwfoi qwfo iqwfgqwf oqwigf qwoigf qowifg qwioegfoiqwgf oiwgefio gqwiefg qowigf oqwigef oqwigfeoiq wfiogq iwogefiqwgifeog qfwig i  ok this is the eend of the text';
// let res = texxt.slice(0,280);//rememer that the last index is not shown while using slice so it will be 280
// console.log(res);
// console.log(res.length);


// //substring()
// //same as slice but does not performs negative initializaation

// let sentence = 'asdhf asdfhj adhf ';
// let res = sentence.substring(6, -3);//gives the value but does not peroform negative initilizaions
// console.log(res);


// //subbstr
// //simliar to slice but second paarameter specifiees the length not end value, only diff is if negative number is ppassssed no output

// let str = 'ajjsdg fkasgdfk gks al';
// let res = str.substr(0, 4);
// console.log(res);






// //replace(searchFor, replace with)// it is case sensitive
// let sentence = 'my name is anik shakya anik';
// let replaceData = sentence.replace('anik', 'nimisa');//replace replaces the first value that it gets. it doesnot change the original vaue of the variable
// console.log(replaceData);
// console.log(sentence);



//extrACTing string characters
//charAt(position)
//charCodeAt(position)
//Property access()


//charAt()
//return the character that is in a perticular index //used toreturn the character present in a certain index
// let str = 'hello world';
// let at = str.charAt(6);//here 6 is the index nummber
// console.log(at);

//charCodeAt()
//returns  the unicode of cretain character of specified index. uncicoe is a unique value giveen to a characher present UTF-8, utf-16
// let str = ' su kha tho macha';
// let updt = str.charCodeAt(0);
// console.log(updt);
// //show the unicode of the last character 
// let sentence = ' malai na shodha kaha dukhcha ghau';
// let lastInd = sentence.length -1;
// console.log(sentence.charCodeAt(lastInd));


// //property access
// let srt = 'Hello world';
// console.log(srt[7]);//using [] in a string not an array data type is know as property access






// //other useful methods

// //toUpperCase(), toLowerCase()
// let name = 'anik';
// let name2 = 'NIK';
// console.log(name.toUpperCase());
// console.log(name2.toLowerCase());

//concat()
// let fName = 'Anik';
// let lName = 'Shakya';

// console.log(fName  +  lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));//concat() does the same thing as +
// console.log(lName.concat(' ',fName));

// //trim()
// //removees unnecessary spaces and return it without spaces
// let name = '                Anik Shakya                ';
// console.log(name.trim());//now it only returns Anik Shakya

// //but removes from the left and right side of the string i.e
// let name = '        NIK              shlaya     ';//now it returns nik       shaya
// console.log(name.trim());


//to convert string into an array
//split()
//ways

// let txt = 'a, b, | c, d';//string
// console.log(txt.split(','));//split on commas
// console.log(txt.split(' '));//split on spaces
// console.log(txt.split('|'));//split on pipe

// let sentence = ' my name is hunter u want to see my gun';
// let arr = sentence.split(' ');
// console.log(arr);





//date and time in javaScript
//it returns the date from 1 january 1970 to present

// //creatig a date object
// //there are 4 ways
// new Date();// new key word objets constructer
// new Date(year, month, day, hours, minutes, seconds, milliseconds);//it has 7 agruments
// new Date(milliseconds);
// new Date(date string)

// //new Date()// we can get both date ad time from Date()
// let currDate = new Date();
// console.log(currDate);

// //to get the perfect timing on your terminal
// console.log(new Date().toLocaleString());//loale date of ur country
// //or
// console.log(new Date().toString());


// //Date.now()
// //returns number of millisec from 1 jan 1970 to present
// console.log(Date.now());




// //new Date(year, month, day, hour, minute, seconds, milliseconds) 7 arguments
// //note JavaScript counts the months from 0 -11
// //while passing the argument the month is compelsory

// let d = new Date(2000, 3, 17, 20, 30, 12, 789);
// let d2 = new Date(2000);
// console.log(d.toLocaleString());
// console.log(d2.toLocaleString());




// //new Date(dateString)

// let d = new Date('April 17, 2000 10:00:00');
// console.log(d.toLocaleString());


// //new Date(milliseconds)
// let d = new Date(1650271696780);
// let d2 = new Date(0);
// let d3 = new Date(86400000*2);
// console.log(d.toLocaleString());
// console.log(d2.toLocaleString());
// console.log(d3.toLocaleString());







// //Date methods

// //how to get individual date
// const curDate = new Date();

// //get
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());// 0-11 jan to december
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// //set(set time in milliseconds)
// console.log(curDate.toLocaleString());
// console.log(curDate.setFullYear(2020));
// console.log(curDate.setFullYear(2020, 11, 22, 2));//set FullYear can set months and DATE also
// console.log(curDate.setMonth(11));// 0-11 jan to december
// console.log(curDate.setDate(22));






//time methods
// const curTime = new Date();
// //get
// console.log(curTime.toLocaleString());
// console.log(curTime.getTime());//return no of milliseconds since 1 jan 1970
// console.log(curTime.getHours());// returns hours of a date as a number(0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// //set (own time)
// console.log(curTime.toLocaleString());
// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(44));
// console.log(curTime.setSeconds(56));
// console.log(curTime.setMilliseconds(12));








// //to get time only
// let t = new Date().toLocaleTimeString();
// console.log(t);

// //to get date only
// let d = new Date().toLocaleDateString();
// console.log(d);










//--------MATH OBJECT IN JavaScript---------------
//to access the ;math library we need to call the class first i.e Math.sunction();

// console.log(Math.PI);

// //Math.round();
// let num = 2.89;
// console.log(Math.round(2.89));//rounds off the given number

// //Math.pow();
// console.log(Math.pow(2,3));//equivalet to 2 to the power 3
// console.log(2**3);//same thing equivalent to 2 to the power 3

// //Math.sqrt();// used to take out the square root of the given number// acccepts only 1 value at a time
// let num = 144;
// console.log(Math.sqrt(num));

// //for array
// const arr = [25, 26, 81, 144, 23];
// let sqrtArr = arr.map((currVal)=>{
//     return Math.sqrt(currVal);
// })
// console.log(sqrtArr);



// //Math.abs()
// //returns the absolute (postive) value only

// let num = -78;
// console.log(Math.abs(num));

// let sub = 12-144;
// console.log(sub);
// console.log(Math.abs(sub));




// //Math.ceil()
// //rounds off to a greater value no matter if the decimal is
// let num = 4.1;
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// //Math.floor()
// //exact the opposite of Math.ceil, it rounds off to the lower value no matter the decimal
// let num = 2.9;
// console.log(Math.floor(num));
// console.log(Math.round(num));

//  let num = -7.89;
//  console.log(Math.floor(num));//returns doesnot rounds off is the number is negative






// //Math.min()
// ///finds the minimun value and returns it in a list of arrgumentts
// console.log(Math.min(23, 345, 32, -125, -545,13,45 ,432, -2));

// let num = (-2321, 3434, -3434, 324, -3242, -735,- 2342 ,-23);
// console.log(Math.min(num));//this is an error it only returns the last value


// //Math.max()
// //opposite to Math.min
// console.log(Math.max(23, 345, 32, -125, -545,13,45 ,432, -2));








// //-----------------Math.random()---------------
// //genetares a random value from 0.00 to 0.99....

// // console.log(Math.random());

// // //to generate from 0-9 multiply by 10, to generate from 0 - 100 multiplay by 100.....
// // console.log(Math.random()*10);

// //to remove the decimal 
// console.log(Math.floor(Math.random()*100));//here Math.floor rounds off the decimal to the lowest value and eturns a whole number






// //Math.trunc()
// //returns the number before decimal part if a number, can be used with ranndom
// //if the given number is positive works like Math.floor()
// //if the given number is negative it works like Math.ceil() beacause -3 is greater then -3.99

// let num = -3.878;
// console.log(Math.trunc(num));











//-----------------------------DOM in javaScript-----------------------
//dom is the doument object module that helps to get datas of the document.i.e <html>...</html>

//dom tree
//------html
//body--------head
//|            |
//div--a      meta---link


//to find the childelements, siblings
//document.body.children
//document.body.previous.sibling



//diff btwn document.getEmelentById & query selector
//==> the diff is that in query selector all id, class and tag data can be retrived e.g
//document.querySelector('#id')use # for id
//document.querySelector('.class')use . for class
//document.querySelector('p')use nothing for tags








//-----------Events in javaScript
//things that happens to html elements, then it is an event so java script can react to this event
//an html can be event somthing that a browser does or something that a user does
//e.g
//html page finis loading(load event)
//html input field was changed
//button click


// let a = get.elementById('anik');
// a.addEventListener('click', function (){
//     alert('randi');
// })
// a.addEventListener('click', function (){
//     console.log('randi');
// })




















