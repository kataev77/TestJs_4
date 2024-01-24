function getName(text) {
    return text
}
console.log(getName({key: 1}));

function getNames(person) {
    return person = {
        firstname: 'Khamzat',
        lastname: 'Kataev',
        age: 21
    }
}
console.log(getNames().firstname, getNames().lastname);

function concatNames(obj, lastname) {
    return obj = {
        firstname: 'Ахмед',
        age: 26
    }
};
lastname = 'Ахмедов'
console.log(concatNames().firstname, lastname);


function correctName(obj) {
    obj = {
        firstname: 'Adam',
        lastname: 'Adamov',
        fathername: undefined
    }
    if(obj.fathername === undefined){
        return obj.firstname
    }
    
}
console.log(correctName());

function correctNames(obj) {
    obj = {
        firstname: 'Аслан',
        lastname: 'Асланов',
        fathername: 'Асланович'
    }
    return obj
}
console.log(correctNames().firstname, correctNames().lastname, correctNames().fathername);

