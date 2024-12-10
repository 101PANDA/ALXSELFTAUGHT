import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
    
    // let dPromises;
    // try {
    //     dPromises = await Promise.all([
    //         uploadPhoto,
    //         createUser,
    //     ]);
    // } catch (error) {
    //     dPromises = [null, null];
    // } finally {
    //     return {
    //         photo: dPromises[0],
    //         user: dPromises[1],
    //     };
    // }

    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        return {
            photo: photo,
            user: user,
        };
    } catch (error) {
        return {
            photo: null,
            user: null,
        };
    }

}