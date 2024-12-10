// 
// function createEmployeesObject(departmentName, employees) {
//     return {[departmentName] : employees};
// }
// const employees = {
//     ...createEmployeesObject('engineering', ['Bob', 'Jane']),
//     ...createEmployeesObject('marketing', ['Sylvie'])
// };   



// function createReportObject(employeesList) {
//     return {
//         allEmployees: {...employeesList,},
//         getNumberOfDepartments(allEmployees) {
//           return Object.keys(allEmployees).length
//         }
//     }
//   }
// const report = createReportObject(employees);


// // const departments = Object.keys(report.allEmployees)
// // console.log();
// // for (const dept of departments){
// //     for (const employee of report.allEmployees[dept]){
// //         console.log(employee)
// //     }
// // }



export default function createIteratorObject(report) {
    const departments = Object.keys(report.allEmployees);
    let currdeptidx = 0;
    let curremplidx = 0

    return {
        
        [Symbol.iterator]: function() {
            return this;
        },

        next: function() {
            if (currdeptidx < departments.length) {
                const currentdept = report.allEmployees[departments[currdeptidx]];
                if (curremplidx < currentdept.length) {
                    const employee = currentdept[curremplidx];
                    curremplidx += 1;
                    return {
                        value: employee,
                        done: false
                    };
                } else {
                    curremplidx = 0;
                    currdeptidx += 1;
                    return this.next();
                }
            }
            else {
                return { value: undefined, done: true };
            }
        }
    };
}
