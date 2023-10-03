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

//check at what index starts the word day in word funday
newQuote.indexOf("day")