let start = {
    login: 'Kataev77',
    password: 'Amd042ru2002'
};

let person = {
    firstname: 'Khamzat',
    lastname: 'Kataev',
    city: 'Grozny',
    age: 21,
    height: 180,
    heightMeters: 1.80,
    born: 2002,
    haveCar: false,
    carName: undefined,
    haveSkills: 'Yes',
    level: 10,

    mobilePhone: {
        phoneInfo: 'Бюджетный игровой телефон',
        modelName: 'Poco x5 pro 5g',
        value: 23000,
        telecommunicationsOperator: 'Билайн',
        production: 'China'
    }
};

let galaxy = {
    name: 'Млечный путь',
    type: 'Спиральная галактика с баром',
    weight: (1-2)*10**12,
    height: undefined,
    coordinatesGalaxyCenter: null,
    ageGalaxy: '10-12 миллиардов',
    wasMuslimApalon: true,

    planetEarth: {
        weight: '5.9742 * 10**24',
        worldPopulation: 7888000000,
        age: undefined
    }
};

delete galaxy.weight;
console.log(galaxy);


let student = {
    firstname: 'Rakhim',
    lastname: 'Mamakaev',
    height: 180,
    born: 2002
};
student.age = 21;
console.log(student);


