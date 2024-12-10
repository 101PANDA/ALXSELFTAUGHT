export default function divideFunction(numerator, denominator) {

    let value;
    try {
        if (denominator == 0) {
            throw new Error('cannot divide by 0');    
        } else {
            value = numerator / denominator;
        }
    } catch (error) {
        throw error;
    }

    return value;

}