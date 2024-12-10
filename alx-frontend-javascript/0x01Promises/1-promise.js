
// function _isTrue(arg) {
//     if (arg == true){
//         return({status : 200, body : 'Success',});
//     }
//     else {
//         return(new Error("The Fake API is very Fake!!!"));
//     }
// }

export default function getFullResponseFromAPI(success) {
    let val;
    return new Promise((resolve, reject) => {
        // try {
        //     val = _isTrue(success);
        //     resolve(val);
        // } catch (error) {
        //     reject(error);
        // }

        if (success == true){
            resolve({status : 200, body : 'Success',});
        }
        else {
            reject(new Error("The Fake API is very Fake!!!"));
        }

    });

}
