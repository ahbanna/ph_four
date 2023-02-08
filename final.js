// A function named mindGame takes a positive number as input. An error message "Please enter a positive number" is returned if the number is not a number or if it is less than or equal to 0. Otherwise, it multiplies the input by 3, adds 10, divides the result by 2, and finally subtracts 5 from the result.

function mindGame(number){
    if(typeof number !=="number" || number <= 0){
        return "Please enter a positive number";
        }else{
            let calculation = (number * 3 + 10) / 2 - 5;
            return calculation;
        }
    }




    // evenOdd is a function that takes a string as input. If it is not a string, it returns a error message "Please input text". Otherwise, it calculates the length of the string and show "even" if it's length is an even number, or show "odd" if it's length is an odd number.

    function evenOdd(text){
        if(typeof text == "number" || text.length === 0){
            return "Please enter text";
        } else if(text.length % 2 === 0){
            let evenText = "even";
            return evenText;
        }else{
            let oddText = "odd";
            return oddText;
        }
    }


    // A function named isLGSeven takes a number as input. An error message "Please enter a number" is returned if the input is not a number. Otherwise, 7 is subtracted from the number. If the result is less then 7, then return the result. And if the result is more or equal to 7, return the input number with double.

    function isLGSeven(number){
        let result = number - 7;
        if(typeof number !=="number"){
            return "Please enter a number";
        } else if(result < 7){
            return result;
        } else{
            return number * 2;
        }
    }


// findingBadData is a function that takes an array. The function returns total number of negative element. An error message "Please input an array." is returned if the input is not a array. 

function findingBadData(numbers){
    if (Array.isArray(numbers) === false){
        return "Please input an array.";
    }

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if(number < 0){
            count = count + 1;
        }
    }
    return count;
}


// gemsToDiamond is a function that takes three parameter. the first, second and third parameters are mulply by 21, 32 and  43 respectively ‍then added. If the result is more or equal to double of 1000, then subtract 2000 from the result. Otherwise return the result. On the other hand, any parameter is wrongly given as string or missing, show an error message "Please input three valid number".

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






