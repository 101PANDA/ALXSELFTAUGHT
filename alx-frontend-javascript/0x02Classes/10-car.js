// Class named Car

export default class Car {

    // Constructor attributes:
        // brand (String)
        // motor (String)
        // color (String)
    constructor(brand, motor, color){
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    // Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    // setters
    set brand(brand){
        if (typeof brand === 'string'){
            this._brand = brand;
        } else {
            this._brand = undefined;
        }
    }
    set motor(motor){
        if (typeof motor === 'string'){
            this._motor = motor;
        } else {
            this._motor = undefined;
        }
    }
    set color(color){
        if (typeof color === 'string'){
            this._color = color;
        } else {
            this._color = undefined;
        }
    }

    static get [Symbol.species]() {
        return this;
    }

    // This method should return a new object of the class.
    cloneCar() {
        const cloneConstructor = this.constructor[Symbol.species];
        return new cloneConstructor(this._brand, this._motor, this._color);
    }
}