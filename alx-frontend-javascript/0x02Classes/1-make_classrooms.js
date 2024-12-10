import Classroom from "./0-classroom";

export default function initializeRooms() {

    let classSizes = [19, 20, 34];
    let Classes = [];
    for (let index = 0; index < classSizes.length; index++) {
        Classes[index] = new Classroom(classSizes[index]);
    }

    return Classes;

}