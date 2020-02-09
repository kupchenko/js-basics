const person = Object.create({}, {
    name: {
        value: 'Yuliia',
        configurable: true, //can be deleted with 'delete person.name'
        enumerable: true, //visible in for/in
        writable: true
    },
    birthYear: {
        value: 1995,
        configurable: false,
        enumerable: false,
        writable: false //non-changeable
    },
    age: {
        enumerable: true,
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(age) {
            return new Date().getFullYear() - age;
        }
    }
});

function printPersonKeys() {
    console.group("Person keys");
    for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${person[key]}`)
        }
    }
    console.groupEnd();
}

printPersonKeys();

delete person.name;

printPersonKeys();