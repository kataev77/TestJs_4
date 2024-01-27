const person_2 = {
    name: 'Mansur',
    number: 789798456
}
function getName(obj) {
   const {name, number} = obj
   return name
}
console.log(getName(person_2));





const person = {
    firstname: 'Khamzat',
    lastname: 'Kataev',
    age: 21
}
function getNames(obj) {
    const {firstname, lastname, age} = obj
    return [firstname, lastname]
}
console.log(getNames(person));



const person_1 = {
    firstname: 'Ахмед',
    age: 21
};
function concatNames(obj, lastname) {
    const {firstname} = obj
    return `${firstname}  ${lastname}`
};
console.log(concatNames(person_1, 'Ахмедов'));




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



