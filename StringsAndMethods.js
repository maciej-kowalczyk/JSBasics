const Person = require('./Clases') //calls class from Clases.js file

let day = 'tuesday '
console.log(day.length) // count letters - 8
let subDay = day.slice(0,4) //cut "tues" out
console.log(subDay) // shows "tues"
console.log(day[1]) // shows "u"

//spit tuesday on tes day
let splitDay = day.split("s")
console.log(splitDay) // 'tue', 'day'
console.log(splitDay[0]) //tue
console.log(splitDay[1]) //day
console.log(splitDay[2]) //undefined

console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '23'
let nexDate = '27'
let diff = parseInt(nexDate) - parseInt(date) //converts string to int
console.log(diff)
diff.toString() //converts number to string

let newQuote = day + "is Funday"
console.log(newQuote)

//select the word day from newQuote. Search starts after 5th place
let val = newQuote.indexOf("day",5) 
console.log(val)

//When searching word is not present the outcome will be -1
let yey = newQuote.indexOf("yey")
console.log(yey)

//How many times the word "day" is present? 
let count = 0
let countDay = newQuote.indexOf("day")
while(countDay !== -1)
{
    count++
    countDay = newQuote.indexOf("day",countDay+1)
}
console.log(count)


//imported stuff from Clases.js
let person = new Person("Alex", "Kamal")
console.log(person.fullName())