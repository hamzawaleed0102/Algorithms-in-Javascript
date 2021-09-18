/*
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. 
Count how many candles are tallest.

Example
candles=[4,4,1,3

The maximum height candles are 4 units high. There are 2 of them, so return 2.

Sample Input:

3 2 1 3
Sample Output:

2

Explanation:
Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them.
*/

function birthdayCakeCandles(candles) {
    const candlesCount={}
    let maxCandleHeight=candles[0]
    
    candles.forEach(candleHeight=>{
        if(candleHeight>maxCandleHeight){
            maxCandleHeight=candleHeight
        }
        if(candlesCount[candleHeight]===undefined){
           candlesCount[candleHeight]=1
        }else{
             candlesCount[candleHeight]++
        }
    })
    return candlesCount[maxCandleHeight]
  }