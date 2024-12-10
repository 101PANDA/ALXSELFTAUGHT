// Class named HolbertonClass:

// Constructor attributes:
//  size (Number)
//  location (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// When the class is cast into a Number, it should return the size.
// When the class is cast into a String, it should return the location.

export default class HolbertonClass {
    //Constructor
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }

    //Class setters
    set size(size){
        if (typeof size == 'number'){
            this._size = size;
        } else {
            throw new TypeError('Size must be a number');
        }
    }
    set location(location){
        if (typeof location == 'string'){
            this._location = location;
        } else {
            throw new TypeError('Location must be a string');
        }
    }

    //Class getters
    get size(){
        return this._size;
    }
    get location(){
        return this._location;
    }

    [Symbol.toPrimitive](HolbertonClass){
        if (HolbertonClass === 'string'){
            return this._location;
        }
        if (HolbertonClass === 'number'){
            return this._size;
        }
    }

}