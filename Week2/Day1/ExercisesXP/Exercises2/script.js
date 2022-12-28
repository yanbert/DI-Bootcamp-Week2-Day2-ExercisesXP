/*Exercises2 : part I*/
 //1-Create a variable named myWatchedSeriesLength that is equal to the number of series in the
 let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
 myWatchedSeriesLength = myWatchedSeries.length;
 console.log(myWatchedSeriesLength);
 //2-Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series
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





