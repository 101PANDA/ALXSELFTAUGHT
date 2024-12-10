// function named setFromArray that returns a Set from an array.

// It accepts an argument (Array, of any kind of element).

export default function setFromArray(anArray) {
    if (Array.isArray(anArray)) {
        return new Set(anArray);
    } else {
        return new TypeError('Argument assed must be an array');
    }
}