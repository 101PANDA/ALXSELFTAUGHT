// Class named HolbertonCourse:

// Constructor attributes:
//     > name (String)
//     > length (Number)
//     > students (array of Strings)
// Make sure to verify the type of attributes during object creation
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.

export default class HolbertonCourse {
    constructor(name, length, student) {
        // this._name = name;
        // this._length = length;
        // this._student = student;

        this.name = name;
        this.length = length;
        this.student = student;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError(`Name must be a string`);
        }
    }

    get name() {
        return this._name;
    }

    set length(length) {
        if (typeof length === 'number'){
            this._length = length;
        } else {
            throw new TypeError(`Length must be a number`);
        }
    }

    get length() {
        return this._length;
    }

    set student(student) {
        if (typeof student === typeof []){
            this._student = student;
        } else {
            throw new TypeError(`Student must be an array`);
        }
    }

    get student() {
        return this._student;
    }
}


