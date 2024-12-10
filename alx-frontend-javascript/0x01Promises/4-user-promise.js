
export default  async function signUpUser(firstName, lastName) {
    
    return await new Promise((resolve, _) => {
        resolve({
            firstName: firstName,
            lastName: lastName,
        });
    });
    

}