console.log("Hello World.");

generateRandomNumber(30);

function generateRandomNumber(max){
    let randomNum = Math.floor(Math.random() * max) + 1;
      
    if(randomNum <= 15) {
        return console.log(`Random Number  ${randomNum} is in B. 1 - 15`)
     } else if (randomNum >=16 && randomNum <=30){
        return console.log(`Random Number ${randomNum} is in I. 16 - 30`)
    } else if (randomNum >=16 && randomNum <=45){
        return console.log(`Random Number ${randomNum} is in N. 31 - 45`)
    } else if (randomNum >=16 && randomNum <=60){
        return console.log(`Random Number ${randomNum} is in G. 46 - 60`)
    } else if (randomNum >=16 && randomNum <=75){
        return console.log(`Random Number ${randomNum} is in O. 61 - 75`)
     }else{
     
    return console.log(`Random number is invalid.`)
     }
}