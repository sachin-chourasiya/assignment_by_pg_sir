const data = require('./data.json');
const readline = require("readline");

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question("Enter Sku Id ", function (inputByUser) {
  const divideInput = inputByUser.split('=');
  let num = parseInt(divideInput[1]);
  for(let i=0;i<data.length;i++){
    if(data[i].sku == num){
      console.log(true);
      data[i].sku = Math.floor(Math.random()*100);
      console.log(data[i]);
      break;
    }
    
  }
  userInput.close();
});

