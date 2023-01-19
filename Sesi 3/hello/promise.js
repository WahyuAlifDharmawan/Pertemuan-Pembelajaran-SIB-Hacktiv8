import fetch from "node-fetch";

const fetchApi = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');

    let data = await response.json();

    console.log(data);
}

fetchApi();

const setTimeoutPromise = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
};
setTimeoutPromise(1000).then(() => console.log("tick"));

//new promise
const setTimeoutPromise2 = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
};
setTimeoutPromise2(1000).then(() => console.log("tick"));