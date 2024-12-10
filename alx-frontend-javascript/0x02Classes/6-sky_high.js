// Class named SkyHighBuilding that extends from Building:

// Constructor attributes:
//  sqft (Number) (must be assigned to the parent class Building)
//  floors (Number)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter for each attribute.
// Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.

import Building from "./5-building";

export default class SkyHighBuilding extends Building {

    constructor(sqft, floors){
        super(sqft);
        this.floors = floors;
    }

    set floors(floors){
        if (typeof floors == 'number'){
            this._floors = floors;
        } else {
        throw new TypeError("floors must be a number.");
        }
    }

    get floors(){
        return this._floors;
    }

    evacuationWarningMessage() {
        return (`Evacuate slowly the ${this._floors} floors`);
    }
}