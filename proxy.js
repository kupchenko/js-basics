// Wrapper
const withDefaultValue = (target, defaultValue = '') => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
};

const user = withDefaultValue(
    {
        name: 'dmitrii',
        age: 42
    },
    ''
);

console.log(`Non-existing prop '${user.id}'`);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
};

const data = withHiddenProps({
    _uid: '12345',
    name: 'Dmitrii',
    age: 25,
    _blocked: false
});

console.group("Printing visible properties");
for (let p in data) {
    console.log(`${p}`)
}
console.groupEnd();

// Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {};
        args.forEach(item => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item;
                            arr[prop].call(arr, item)
                        };
                    case 'findById':
                        return id => index[id];
                    default:
                        return arr[prop]
                }
            }
        })
    }
});

const users = new IndexedArray([
    {id: 11, name: 'Dmitrii', job: 'JS', age: 23},
    {id: 22, name: 'Yuliia', job: 'QA', age: 22},
    {id: 33, name: 'VV', job: 'Backend', age: 44}
]);

console.log(users.findById(11));