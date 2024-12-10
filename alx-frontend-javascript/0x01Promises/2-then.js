
export default function handleResponseFromAPI(promise) {
    // console.log("Got a response from the API");
    
    // try {
    //     promise.then;
    //     return({
    //         status: 200,
    //         body: success,
    //     });
    // } catch (error) {
    //     return(new Error());
    // }

    promise.then(() => {
        console.log("Got a response from the API");
        return({
            status: 200,
            body: success,
        });
    }).catch(() => {
        return(new Error());
    });

}

// const promise = Promise.reject();

// console.log(promise);