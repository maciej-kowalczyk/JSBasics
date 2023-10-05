module.exports = class Person //export class for usage in other clases
{
    age = 25
    get location() //when we're using get that's mean that they're properties
    {
        return "canada" 
    }

    //constructor is a method witch executes by default when you create object of the class
    constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }

    //methods
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }
}

// let person = new Person("Winston","Duarte")
// let person1 = new Person("Christen","Avasarala")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName()) //that's how methots are called
// console.log(person.age) 
// console.log(person1.fullName()) // Name is changing but not the age
// console.log(person1.age) 
