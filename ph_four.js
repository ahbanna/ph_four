// Problem One 

function evenOdd(number){
    let threeMul = number * 3;
    let addTen = threeMul + 10;
    let divThree = addTen / 2;
    let finalOutput = divThree - 5;
    return finalOutput;
}
let number = 33;
let result = evenOdd(number);
console.log(result);


// Problem Two
function evenOdd(text){
    if(typeof text == "number" || text.length === 0){
        return "Please enter text";
        } else if(text.length % 2 === 0){
            let evenText = "even";
            return evenText;
        }
        else{
            let oddText = "odd";
            return oddText;
    }
    }
    let text = "Bangladesh";
    let result = evenOdd(text);
    console.log(result);
    