// Import Car from 10-car.js
import Car from "./10-car";

// class named EVCar that extends the Car class
export default class EVCar extends Car{

    // Constructor attributes:
    //     brand (String)
    //     motor (String)
    //     color (String)
    //     range (String)
    constructor(brand, motor, color, range){
        super(brand, motor, color);
        this.range = range;
    }

    set range(range){
        if (typeof range === 'string'){
            this._range = range;
        } else {
            throw new TypeError('brand must be a string');
        }
    }
    
    get range(){
        return this._range;
    }

    static get [Symbol.species](){
        return Car;
    }

    cloneCar(){
        const EVCarClone = this.constructor[Symbol.species];
        return new EVCarClone(undefined, undefined, undefined);
    }
    
}