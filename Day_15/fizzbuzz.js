// Write number 1 to 100, If number multiple of 3 then write "Fizz", If number multiple of 5 then write "Buzz", If number multiple of both 3 and 5 then write "FizzBuzz"
var array = [];
var element = 1;

function count(){
    if (element % 3 === 0 && element % 5 !== 0){
        array.push("Fizz");
    }
    else if (element % 5 === 0 && element % 3 !==0){
        array.push("Buzz");
    }
    else if(element % 3 === 0  && element % 5 === 0){
        array.push("FizzBuzz");
    }
    else{
    array.push(element);
    }
    element++;
    while(element <= 100){
        count();
    }
}

count();

