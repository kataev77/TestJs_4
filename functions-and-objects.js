const obj_1 = {
    name: 'Mansur',
    number: 789798456
}
function getName(obj_1) {
    const {name} = obj_1
    return {name}
}
console.log(getName(obj_1));




const person = {
    firstname: 'Khamzat',
    lastname: 'Kataev',
    age: 21
}
function getNames(person) {
    const {firstname, lastname} = person
    return [firstname, lastname]
}
console.log(getNames(person));



const person_1 = {
    firstname: 'Ахмед',
    age: 21
};
function concatNames(obj, lastname) {
    return `${obj = person_1.firstname}  ${lastname = 'Ахмедов'}`
};
console.log(concatNames());




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



