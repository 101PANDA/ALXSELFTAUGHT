// getStudentIdsSum that returns the sum of all the student ids.

export default function getStudentIdsSum(studentInfo) {

    return studentInfo.reduce((accumulator, student) => accumulator + student.id, 0);
    
}