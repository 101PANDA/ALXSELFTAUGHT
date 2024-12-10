// function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

export default function updateStudentGradeByCity(studentInfo, wantedLocation, newGrades){


    return studentInfo
        .filter((student) => student.location == wantedLocation)
        .map((student) => {

            const studentgrade = newGrades.find(currentgrade => currentgrade.studentId === student.id);
            if (studentgrade) {
                return {
                    ...student,
                    grade: studentgrade.grade,
                }
            } else {
                return {
                    ...student,
                    grade: 'N/A',
                }
            }
            
        });
}
