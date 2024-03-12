console.log("Hello World.");

function generateRandomNumber(){
    let randomNum = Math.floor(Math.random() * 10) + 4;
      
    if(randomNum >= 5){
        console.log(`Random Number is > = to 15`);
     }else{
        console.log(`Random Number is < = to 15`);
     }

    return console.log(randomNum);
}