// Objects is collection of properties: for person properties are gender, eye colour

let person = {
    firstName : 'Amos',
    lastName : 'Burton',
    age : 24,
    fullName : function()
    {
        console.log(this.firstName + this.lastName)
    }

}
console.log(person.fullName())
console.log("---")
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Jim Holden'
console.log(person.firstName)

//Adding new properties to object
person.gender = 'male'
console.log(person)
delete person.gender //deletes properties
console.log(person)

console.log('gender' in person) //check if property is in object - if yes = true /false

//print all the values from the object
for(let key in person)
{
    console.log(person[key])
}
