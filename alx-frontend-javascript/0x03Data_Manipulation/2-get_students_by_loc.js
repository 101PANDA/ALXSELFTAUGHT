//  function getStudentsByLocation that returns an array of objects who are located in a specific city.

export default function getStudentsByLocation(studentInfo, location) {
    
    return wantedStudents = studentInfo.filter((student) => student.location == location);
    
}