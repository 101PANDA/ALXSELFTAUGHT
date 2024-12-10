// Class named Currency:

// - Constructor attributes:
//     code (String)
//     name (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullCurrency that will return the attributes in the following format name (code).

export default class Currency {
    
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    set code(code) {
        if (typeof code === 'string'){
            this._code = code;
        } else {
            throw new TypeError('code must be a String');
        }
    }

    get code() {
        return this._code;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    get name() {
        return this._name;
    }

    
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
    
}