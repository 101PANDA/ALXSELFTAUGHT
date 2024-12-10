/// <reference path="Cpp.ts" />

namespace Subjects {

    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React {

        teacher: Subjects.Teacher;

        constructor(teacher: Subjects.Teacher) {
          this.teacher = teacher;
        }

        getRequirements(): string{
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string{
            if (this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`
            } else {
                return 'No available teacher';
            }
        }
    }
}