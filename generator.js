function* generateHello() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}

for (let letter of generateHello()) {
    console.log(letter)
}

const customInterator = function (str) {
    return {
        [Symbol.iterator]() {
            let i = 0;
            return {
                next() {
                    if (i < str.length) {
                        return {
                            value: str[i++],
                            done: false
                        }

                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }
    }
};

console.log("test");

for (let letter of customInterator("test")) {
    console.log(letter)
}