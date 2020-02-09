const createTimeTransformationFunction = function (n) {
    return function (ms) {
        return ms / n;
    }
};

const msToSeconds = createTimeTransformationFunction(1000);
const msToMinutes = createTimeTransformationFunction(60 * 1000);

console.log(msToSeconds(360000));
console.log(msToMinutes(360000));
