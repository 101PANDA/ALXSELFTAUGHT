// function getListStudentIds that returns an array of ids from a list of object.

export default function getListStudentIds(studentInfo) {
    
    if (Array.isArray(studentInfo)) {  
        return studentInfo.map((student) => student.id);
    } else {
        return []
    }
}
