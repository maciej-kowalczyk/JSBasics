//block of code

function add(a,b)
{
   return a + b
   var greet //var decalred in functios stays in function
}
let sum = add(4,5)
console.log(sum)
console.log(add(2,3))
//console.log(greet) //error is expected

//if function does not have a name => Anonymous function
let sumOfIntegers = function(c,d)
{
    return c + d
}
console.log(sumOfIntegers(2,2))

// or 
let sumOfNumbers = (c,d) => c + d
console.log(sumOfNumbers(3,3))

// var works in global level and function
var greet = "Evening"

if(1 == 1)
{
    var greet = "Afternoon" //this line overrides "Evening", this is still global variable but in blocs
}

console.log(greet) //Afternoon


//let works in global level and block level
let notGreet = "Night"
if(1 == 1)
{
    let notGreet = "Day"
}
console.log(notGreet)//Night - let can't be redeclared

//let and var can be reinitialized 
