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

//Sum all of the elements from the array. 110 is correct
var sum = 0
for(let i=0;i<marks.length;i++)
{
    sum = sum + marks[i]
}
console.log(sum)

//reduce filter map
marks.reduce((sum,totalMarks))