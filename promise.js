const fail = false;

const response = new Promise((resolve, reject) => {
    console.log("Requesting data from server");
    setTimeout(() => {
        const data = {
            records: ["1", "12", "13"],
            meta: {
                search: {
                    text: "1"
                }
            }
        };
        console.log("Got response from server");
        resolve(data)
    }, 2000)
});

response
    .then(data => {
        console.log("Requesting additional data from server");
        return new Promise((resolve, reject) => setTimeout(() => {
            const modifiedRecords = data.records.map(value => {
                return {
                    value: value,
                    additional:
                        "additional"
                }
            });
            const modifiedDate = {
                ...data,
                records: modifiedRecords
            };

            if (fail) reject("Failed to load data");
            else resolve(modifiedDate);

            console.log("Got additional data from server");
        }, 2000));
    })
    .then(value => {
        console.log("Got final response: ");
        console.log(value)
    })
    .catch(reason => {
        console.log("Failed to fetch data, reason: '" + reason + "'")
    })
    .finally(() => {
        console.log("Finalizing processing")
    });


const sleep = function (ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
};

let sleep1 = sleep(1_000).then(() => console.log("1000 wait"));
let sleep2 = sleep(5_000).then(() => console.log("5000 wait"));

Promise
    .all([sleep1, sleep2])
    .then(() => {
        console.log("All jobs are finished...")
    });

let sleep3 = sleep(2_000).then(() => console.log("2000 wait"));
let sleep4 = sleep(6_000).then(() => console.log("6000 wait"));

Promise
    .race([sleep3, sleep4])
    .then(() => {
        console.log("One job is finished...")
    });