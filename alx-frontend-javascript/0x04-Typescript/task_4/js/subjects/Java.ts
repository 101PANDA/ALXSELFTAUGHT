/// <reference path="./React.ts" />

namespace Subjects {

    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subject{
        teacher: Subjects.Teacher;


        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string{
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`
            } else {
                return 'No available teacher';
            }
        }
    }
}