export default function iterateThroughObject(reportWithIterator) {

    const checker = reportWithIterator[Symbol.iterator]();
    let check = checker.next();
    let value = check.value;
    let done = check.done;
    let result = value;

    while (done != true){
        check = checker.next();
        value = check.value;
        done = check.done;
        if (!done){
            result = result + ' | ' + value;
        }
    }

    
    return result;
}