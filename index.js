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

let numbers = [ -4, -9, -5, -33, -55, 0 ];
let result = findingBadData(numbers);
console.log(result);


