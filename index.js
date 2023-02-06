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
