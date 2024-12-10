// Class named Pricing:

// Import the class Currency from 3-currency.js

// Constructor attributes:
//     amount (Number)
//     currency (Currency)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
// Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.

import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    set currency(currency) {

        if (currency.constructor.name === 'Currency') {
            this._currency = currency;
        } else {
            throw TypeError('currency must be the class "currency"');
        }
    }
    get currency() {
        return this._currency;
    }

    set amount(amount) {
        if (typeof amount === 'number') {
            this._amount = amount;
        } else {
            throw TypeError('Amount must be a number')
        }
    }
    get amount() {
        return this._amount;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {

        if (typeof amount === 'number' && typeof conversionRate === 'number') {
            return amount * conversionRate
        } else {
            return TypeError('amount and conversion rate must be a number');
        }
    }
}

