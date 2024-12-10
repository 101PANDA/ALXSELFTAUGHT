// Class named Airport:

// Constructor attributes:
// name (String)
// code (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// The default string description of the class should return the airport code (example below).

export default class Airport {

    // class constructor
    constructor(name, code) {
        this.name = name;
        this.code = code;

    }

    // class setters
    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string.');
        }
    }
    set code(code) {
        if (typeof code === 'string') {
            this._code = code;
        } else {
            throw new TypeError('Code must be a string.');
        }
    }

    // class getters
    get name() {
        return this._name;
    }
    get code() {
        return this._code;
    }

    //toString over ride
    toString(){
        return `[object ${this._code}]`;
    }
    
}