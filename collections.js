//Map

const user = {
    name: 'dmitrii',
    age: 23,
    job: 'JS'
};

const map = new Map(Object.entries(user));

for (let [key, value] of map) {
    console.log(`${key} == ${value}`)
}

map.forEach((k, v) => {
    console.log(`${k} -> ${v}`)
});

//WeakMap

let activeUsers = [
    {name: "Vasya"},
    {name: "Kate"},
    {name: "Dmitrii"}
];

let weakMap = new WeakMap();

weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);

console.log(weakMap.has(activeUsers[0]));

activeUsers.splice(0, 1);

activeUsers.splice(0, 1);

//Set