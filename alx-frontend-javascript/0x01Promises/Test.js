// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));
//_________________________________________


// import handleResponseFromAPI from "./2-then";

// const promise = Promise.resolve();
// handleResponseFromAPI(promise);
//_________________________________________


// import handleProfileSignup from "./3-all";

// handleProfileSignup();
//_________________________________________

// import signUpUser from "./4-user-promise";

// console.log(signUpUser("Bob", "Dylan"));

// ________________________________

// import uploadPhoto from './5-photo-reject';

// console.log(uploadPhoto('guillaume.jpg'));
// ________________________________________

// import handleProfileSignup from './6-final-user';

// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
// __________________________________________________

// import loadBalancer from "./7-load_balancer";

// const ukSuccess = 'Downloading from UK is faster';
// const frSuccess = 'Downloading from FR is faster';

// const promiseUK = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, ukSuccess);
// });

// const promiseUKSlow = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 400, ukSuccess);
// });

// const promiseFR = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 200, frSuccess);
// });

// const test = async () => {
//     console.log(await loadBalancer(promiseUK, promiseFR));
//     console.log(await loadBalancer(promiseUKSlow, promiseFR));
// }

// test();

// ______________________________________________________


// import divideFunction from './8-try';

// console.log(divideFunction(10, 2));
// console.log(divideFunction(10, 0));

// ______________________________________________________

// import guardrail from './9-try';
// import divideFunction from './8-try';

// console.log(guardrail(() => { return divideFunction(10, 2)}));
// console.log(guardrail(() => { return divideFunction(10, 0)}));
// ______________________________________________________



import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
