// Create the DirectorInterface interface with the 3 expected methods:

// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workDirectorTasks() returning a string
// Create the TeacherInterface interface with the 3 expected methods:

// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workTeacherTasks() returning a string
// Create a class Director that will implement DirectorInterface

// workFromHome should return the string Working from home
// getToWork should return the string Getting a coffee break
// workDirectorTasks should return the string Getting to director tasks
// Create a class Teacher that will implement TeacherInterface

// workFromHome should return the string Cannot work from home
// getCoffeeBreak should return the string Cannot have a break
// workTeacherTasks should return the string Getting to work
// Create a function createEmployee with the following requirements:

// It can return either a Director or a Teacher instance
// It accepts 1 arguments:
// salary(either number or string)
// if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTask(): string;
}

class Director implements DirectorInterface {
    workDirectorTask(): string {
        return 'Getting director Task'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workFromHome(): string {
        return 'Working from home'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }
    
    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTask(): string {
        return 'getting to work'
    }
}

interface createEmployeeFunction {
    (salary: number | string): Director | Teacher;
}

const createEmployee: createEmployeeFunction = function(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

// Write a function isDirector:

// it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director
// Write a function executeWork:

// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks

interface isDirectorInterface {
    (employee: unknown): employee is Director;
}

const isDirector: isDirectorInterface = function(employee: unknown) {
    return employee instanceof Director;
}

interface executeWorkInterface {
    (employee: Director | Teacher): void;
}

const executeWork: executeWorkInterface = function(employee: Director | Teacher) {
    if (employee instanceof Director) {
        employee.workDirectorTask();
    } else {
        employee.workTeacherTask();
    }
}

// Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

// it takes todayClass as an argument
// it will return the string Teaching Math if todayClass is Math
// it will return the string Teaching History if todayClass is History

type Subjects = 'Math' | 'History';

interface teachClassInterface {
    (todayClass: Subjects): string;
}

const teachClass: teachClassInterface = function(todayClass: Subjects) {
    return `Teaching ${teachClass}`;
}