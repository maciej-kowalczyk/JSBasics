var marks = Array(6)
var marks = new Array(4,8,15,16,23,42)

var marks =[4,8,15,16,23,42]

console.log(marks[2]) // Output should be 15
marks[3] = 17
console.log(marks) // Output should be 4, 8, 15, 17, 23, 42
console.log(marks.length) //Shows lenght of the array - should be 6

marks.push(65) //Appends new elements to the array. New array should be 4, 8, 15, 17, 23, 42, 65
console.log(marks)

marks.pop() //Removes the last parameter. New array should be 4, 8, 15, 17, 23, 42
console.log(marks)

marks.unshift(1) //Appends new element at the begining of the array. New array should be 1, 4, 8, 15, 17, 23, 42
console.log(marks)

console.log(marks.indexOf(42)) // It shows me the index numder of 42 in the array. 6 is correct

console.log(marks.includes(120)) //Verify if number 120 is in the array. False is correct

subMarks = marks.slice(2,5) // Cuts the selected part of the array. 8, 15, 17 is correct
console.log(marks)
console.log(subMarks)

//get all the numbers from begining to end of the array
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}

console.log("---")


//Sum all of the elements from the array. 110 is correct
var sum = 0
for(let i=0;i<marks.length;i++)
{
    sum = sum + marks[i]
}
console.log(sum)

console.log("---")


//reduce filter map
let total = marks.reduce((sum,totalMarks)=>sum+totalMarks,0)
console.log(total)

// create new array with even number of the scores array
var scores = [12,13,14,16]

var evenScores = []

for(let i = 0;i<scores.length;i++)
{
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores) 

//map array function from [ 12, 14, 16 ] => [ 36, 42, 48 ] - multipy by 3
let newArray = newFilterEvenScores.map(score=>score*3)
console.log(newArray)

//sum newArray numbers
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

//All in one line
var scores1 = [12,13,14,16]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

//sorting arrays with strings
let fruits = ["banana", "mango", "pomegranate", "apple"]
fruits.sort()
console.log(fruits)

fruits.reverse() //reverses the order
console.log(fruits)

//sorting arrays with numbers
var scores1 = [16,11,14,9]
console.log(scores1)
scores1.sort(function(a,b){
    return a - b
})
console.log(scores1)

scores1.sort((a,b) => a - b)
console.log(scores1)

console.log(scores1.sort((a,b) => a - b))