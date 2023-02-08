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


    console.log(gemsToDiamond(20, 200, 50));