import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName) {

    // let SignUpInfo;
    // let photoInfo;

    // userDescription =await signUpUser(firstName, lastName)
    // .then((result) => {
    //     SignUpInfo = {
    //         status: resolved,
    //         value: result,
    //     };
    // }).catch((err) => {
    //     SignUpInfo = {
    //         status: rejected,
    //         value: err,
    //     };
    // });


    // photoStatus = await uploadPhoto(filename)
    // .then((result) => {
    //     photoInfo = {
    //         status: resolved,
    //         value: result,
    //     };
    // }).catch((err) => {
    //     photoInfo = {
    //         status: rejected,
    //         value: err,
    //     };
    // });;

    // return [SignUpInfo, photoInfo];

    /**
    Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(filename),
    ]).then((result) => {
        console.log(result);
        return result;
    });
    */

    /**const i = 0;

    const profile = Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(filename),
    ]);

    // for (let index = 0; index < (await profile).length; index++) {
    //     if (profile[index].status == "fulfilled") {
            
    //     }
        
    // }

    return (await profile).map((profileInfo) => {
        if (profileInfo.status == "fulfilled") {
            return { status: profileInfo.status, value: profileInfo.value};
        }
        else {
            return { status: profileInfo.status, value: profile.value.message};
        }
    });*/

    const promises = [
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)
      ];
    
      const results = await Promise.allSettled(promises);
    
      return results.map(result => {
        if (result.status === 'fulfilled') {
          return { status: result.status, value: result.value };
        } else {
          return { status: result.status, value: result.reason.message };
        }
      });


}