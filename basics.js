console.log("Hello World")

//comments that are not executed

/*

Multiple lines comments

*/

// var (let, const) - from ES6

let a=4
console.log(a)
console.log(typeof(a))

let b = 234.6
console.log(b)
console.log(typeof(b))

let c = "Maciej"
console.log(c)
console.log(typeof(c))

let d = true
console.log(d)
console.log(typeof(d))
console.log(!d)

const e = "Constant"
console.log(e)
e = a+b
console.log(e)

//let c = a+b did not work 
c = a+b //reassigning is allowed with let
console.log(c)
// we cannot redeclare variable with let keyword but possible with var



