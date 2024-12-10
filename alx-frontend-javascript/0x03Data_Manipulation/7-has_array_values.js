// function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

// It accepts two arguments: a set (Set) and an array (Array).

export default function hasValuesFromArray(set, array) {
    
    if (Array.isArray(array) && set instanceof Set) {
        for (const element of new Set(array)){
            if (!set.has(element)) {
                return false;
            }
        }
        return true;
    } else {
        return new TypeError('arguments Set and array, must be a Set and Array');
    }
}