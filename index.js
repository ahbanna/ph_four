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

let result = gemsToDiamond(100,5, 1);
console.log(result);




// function gemsToDiamond (num1, num2, num3){
//     let totalDiamond = num1 * 21 + num2 * 32 + num3 * 43;
//     if(totalDiamond >= 2000){
//         let diamond = totalDiamond - 2000;
//         return diamond;
//     } else{
//         return totalDiamond;
//     }
// }

// let result = gemsToDiamond(100,5,1);
// console.log(result);