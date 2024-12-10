// function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

// It should accept three arguments: length (Number), position (Number), and value (Number).

// If adding the value is not possible the error Position outside range should be thrown.

export default function createInt8TypedArray(length, position, value) {

    if (typeof length != 'number' && typeof position != 'number' && typeof value != 'number'){
        return new TypeError('Length, position and value must be numbers');
    }

    const buffer = new ArrayBuffer(length);
    const theArray = new Uint8Array(buffer);

    if (position >= theArray.length) {
        return new Error('Position out of range');
    } else {
        theArray[position] = value;
    }

    return buffer;
    

}