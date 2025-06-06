// function named cleanSet that returns a string of all the set values that start with a specific string (startString).

// It accepts two arguments: a set (Set) and a startString (String).

// When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -

export default function cleanSet(set, startString) {


    if (set instanceof Set && typeof startString == 'string'){
    
        if (startString.length === 0) {
            return '';
        }

        let result = []

        for (const string of set) {
            if (string.startsWith(startString)){
                result.push(string.slice(startString.length))
            }
        }
        return result.join('-');
    } else {
        return new TypeError('arguments, set and startString must be a set and a string');
    }
}
