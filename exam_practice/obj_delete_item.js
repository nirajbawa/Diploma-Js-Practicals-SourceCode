let person = {
    fname:"niraj",
    lname:"bava",
    age:19,
    eyeColor:"black"
}


delete person.eyeColor;

for(let man in person)
{
    console.log(person[man])
}