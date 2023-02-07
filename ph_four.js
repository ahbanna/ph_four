// Problem One 

// function mindGame(number){
//     if(typeof number !=="number" || number <= 0){
//         return "Please enter a positive number";
//         }else{
//             let calculation = (number * 3 + 10) / 2 - 5;
//             return calculation;
//         }
//     }
//     let number = 33;
//     let result = mindGame(number);
//     console.log(result);
    


// Problem Two

    // function evenOdd(text){
    //     if(typeof text == "number" || text.length === 0){
    //         return "Please enter text";
    //     } else if(text.length % 2 === 0){
    //         let evenText = "even";
    //         return evenText;
    //     }else{
    //         let oddText = "odd";
    //         return oddText;
    //     }
    // }

    // let text = "jack ma";
    // let result = evenOdd(text);
    // console.log(result);
        
    
    // Problem: 3

    // function isLGSeven(number){
    //     let result = number - 7;
    //     if(typeof number !=="number"){
    //         return "Please enter a number";
    //     } else if(result < 7){
    //         return result;
    //     } else{
    //         return number * 2;
    //     }
    // }

    // let number = 15;
    // let finalResult = isLGSeven(number);
    // console.log(finalResult);
    

  //  Problem: 4

// function findingBadData(numbers){
//     if (Array.isArray(numbers) === false){
//         return "Please input an array.";
//     }

//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         let number = numbers[i];
//         if(number < 0){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// let numbers = "[ -4, -9, -5, -33, 55 ]";
// let result = findingBadData(numbers);
// console.log(result);


// Problem: 5

function gemsToDiamond (num1, num2, num3){
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number" ){
        return "Please input three valid number"
    }
    let totalDiamond = num1 * 21 + num2 * 32 + num3 * 43;
    if(totalDiamond >= 1000 * 2){
        totalDiamond = totalDiamond - 2000;
        return totalDiamond;
    } else{
        return totalDiamond;
    }
}

let result = gemsToDiamond(100,5,1);
console.log(result);
