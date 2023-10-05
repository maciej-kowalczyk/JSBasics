//One class can inherit/aquire the properties, methods of another class
// The class wich inherits the properties of other is know as subclass (child class)
// the class whose properties are inherited is know as superclass (parent class)

const Person = require('./Clases');
require('./Clases') 
class Pet extends Person {

    get location()
    {
        return "Animals"
    }

    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }
}

let pet = new Pet("Burek","Psowaty")
pet.fullName()
console.log(pet.location)