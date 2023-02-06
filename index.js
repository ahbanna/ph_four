function mindGame(number){
    let threeMul = number * 3;
    let addTen = threeMul + 10;
    let divThree = addTen / 2;
    let finalOutput = divThree - 5;
    return finalOutput;
}
let number = 33;
let result = mindGame(number);
console.log(result);