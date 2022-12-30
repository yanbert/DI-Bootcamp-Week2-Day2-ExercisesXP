/*Exercises1*/
let favoritefood = "placali";
let rice = "diner";
 console.log("I EAT" + "" + favoritefood + "" + rice);

 //////////////////////////////////////////////////

 /*Exercises2 : part I*/
 //1-Create a variable named myWatchedSeriesLength that is equal to the number of series in the
 let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
 myWatchedSeriesLength = myWatchedSeries.length;
 console.log(myWatchedSeriesLength);
 //2-Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series

/**********************************************************
Correcteur: Yannick GOUGUIA
Mauvaise reponse, Revoir l'exercice

*********************************************************/
 let myWatchedSeriesSentence = ["black mirror", "money heist", "and the big bang theory"];
 myWatchedSeriesSentence = myWatchedSeries[0], + "" + myWatchedSeries[1] + "" +myWatchedSeries[2];
 console.log("I looked", + " " + myWatchedSeries +  "" + " and the big bang theory" + ""+myWatchedSeriesSentence);

/* Part II */
// 1-Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the
myWatchedSeries.splice(2,1,"friends");
console.log(myWatchedSeries);

//2-Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("marina");
console.log(myWatchedSeries);
//3-Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Jack Bauer");
console.log(myWatchedSeries);
//4-Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
//5-Console.log the third letter of the series “money heist”
console.log(myWatchedSeries[1].substring(2,3));
//6-Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);
////////////////////////////////////////////////////////////////////////////

/* Exercises 3*/
//1 -Store a celsius temperature into a variable
let temperaturecelcuis = 45;
console.log(temperaturecelcuis);
//2-Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
let temperaturefahrent = (temperaturecelcuis/5) *9+32;
console.log(temperaturefahrent);

//////////////////////////////////////////////////////////////////////////////

/*Exercises4*/
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23
//1-What will be the outcome of a + b in the first expression ?
a + b = 55;
//2-What will be the outcome of a + b in the second expression ?
a + b = 23;
//3-What is the value of c?
c = undefined;

console.log(3 + 4 + '5');

//////////////////////////////////////////////////////////////////////////////////
/*Exercises*/
ypeof(15)
// Prediction:number
// Actual:number
console.log(typeof(15));
typeof(5.5)
// Prediction:number
// Actual:number
console.log(typeof(5.5));
typeof(NaN)
// Prediction:number
// Actual:
console.log(typeof(NaN));
typeof("hello")
// Prediction:string
// Actual:string
console.log(typeof("hello"));
typeof(true)
// Prediction:boolean
// Actual:
console.log(typeof(true));
typeof(1 != 2)
// Prediction:boolean
// Actual:boolean
console.log(typeof(1 !=2));
"hamburger" + "s"
// Prediction:string
// Actual:
console.log(typeof("hamburger" + "s"));
"hamburgers" - "s"
// Prediction:string
// Actual: number
console.log(typeof("humburgers" - "s"));
"1" + "3"
// Prediction:string
// Actual:
console.log(typeof("1" + "3"));
"1" - "3"
// Prediction:string
// Actual:
console.log(typeof("1" - "3"));
"johnny" + 5
// Prediction:string
// Actual:number
console.log(typeof("johnny" + 5));
"johnny" - 5
// Prediction:string
// Actual:string

99 * "hello"
// Prediction:nan
// Actual:number
console.log(typeof(99 * "hello"));
1 != 1
// Prediction:boolean
// Actual:boolean
console.log(typeof(1 != 1));
1 == "1"
// Prediction:boolean
// Actual:boolean
console.log(typeof(1 =="1"));
1 === "1"
// Prediction:boolean
// Actual:boolean
console.log(typeof(1 === "1"));

////////////////////////////////////////////////////////////////////////////////
/*Exercises6*/
5 + "34"
// Prediction:string
// Actual:string
console.log(typeof(5 + "34"));
5 - "4"
// Prediction:number
// Actual:number
console.log(typeof(5 - "34"));
10 % 5
// Prediction:number
// Actual:number
console.log(typeof(10 % 5));
5 % 10
// Prediction:number
// Actual:number
console.log(typeof(5 % 10));
"Java" + "Script"
// Prediction:string
// Actual:string
console.log(typeof("java" + "script"));
" " + " "
// Prediction:string
// Actual:string
console.log(typeof("" + ""));
" " + 0
// Prediction:string
// Actual:string
console.log(typeof("" + 0));
true + true
// Prediction:
// Actual:
console.log(typeof(true + true));
true + false
// Prediction:boolean
// Actual:number
console.log(typeof(true + false));
false + true
// Prediction:boolean
// Actual:number
console.log(typeof(false + true));
false - true
// Prediction:boolean
// Actual:number
console.log(typeof(false - true));
!true
// Prediction:boolean
// Actual:boolean
console.log(typeof(!true));
3 - 4
// Prediction:number
// Actual:number
console.log(typeof(3 - 4));
"Bob" - "bill"
// Prediction:string
// Actual:number
console.log(typeof("bob" - "bill"));
