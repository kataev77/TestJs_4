const person_2 = {
    name: 'Mansur',
    number: 789798456
}
function getName(obj) {
   obj = person_2
   return obj.name
}
console.log(getName());





const person = {
    firstname: 'Khamzat',
    lastname: 'Kataev',
    age: 21
}
function getNames(obj) {
    obj = person
    return [obj.firstname, obj.lastname]
}
console.log(getNames());



const person_1 = {
    firstname: 'Ахмед',
    age: 21
};
function concatNames(obj, lastname) {
    return `${obj}  ${lastname = 'Ахмедов'}`
};
console.log(concatNames(person_1.firstname));




const findPerson = {
    firstname: 'Adam',
    lastname: 'Adamov',
    fathername: undefined
};
const secondPerson = {
    firstname: 'Аслан',
    lastname: 'Асланов',
    fathername: 'Асланович'
}
function correctName(obj) {
    const {firstname, lastname, fathername} = obj;
    return !fathername ? firstname : `${firstname} ${lastname} ${fathername}`
}
console.log(correctName(findPerson));



