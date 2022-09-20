let maxNumber = 100;
let minumber  = 999;
for(let i =1; i<=5; i++){
    let number = genRandomNumber();
    console.log("number" + i +":"+number);
    if(number < minumber)
    minumber = number;
    if(number > maxNumber)
    maxNumber = number;
}
function genRandomNumber(){
    return Math.round(Math.random()*850);
}
console.log("Maximum Number = " + maxNumber);
console.log("Minmum Number = " + minumber);