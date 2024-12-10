import {uploadPhoto, createUser} from "./utils.js";

export default async function handleProfileSignup() {
    
    const profile = await Promise.all([
        await uploadPhoto(),
        await createUser(),
    ]);
    console.log(profile[0].body, profile[1].firstName, profile[1].lastName);

}
