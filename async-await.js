const delay = (ms) => {
    return new Promise(r => {
        setTimeout(() => r(), ms)
    })
};

delay(2000).then(() => console.log("2 seconds delay"));

const url = 'https://jsonplaceholder.typicode.com/todos';

console.log(`[Promise] Fetching records`);
delay(2000)
    .then(() => fetch(url))
    .then(response => response.json())
    .then(data => data.map(value => value.title))
    .then(data => console.log(`[Promise] Got ${data.length} records`))
    .catch(reason => console.error(`[Promise] ${reason}`))
    .finally(() => console.log("[Promise]  Fetch finished"));

//Same approach with async/await

const fetchData = async function () {
    try {
        console.log(`[Async/Await] Fetching records`);
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log(`[Async/Await] Got ${data.length} records`)
    } catch (e) {
        console.error(`[Async/Await] ${e}`)
    } finally {
        console.log("[Async/Await] Fetch finished")
    }
};

fetchData().then(() => console.log("Async/await is finished"));