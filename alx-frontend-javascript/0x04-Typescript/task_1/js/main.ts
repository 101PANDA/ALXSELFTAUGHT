// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName:string, LastName: string) {
    return [firstName[0], LastName].join('. ')
};

interface StudentInstance {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInstance;
}

class Student implements StudentInstance {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set firstName(firstName: string){
        this.firstName = firstName;
    }
    get firstName(): string {
        return this.firstName;
    }
    set lastName(lastName: string){
        this.lastName = lastName;
    }
    get lastName(): string {
        return this.lastName
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this._firstName;
    }
}