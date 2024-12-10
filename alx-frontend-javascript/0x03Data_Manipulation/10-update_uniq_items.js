// function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.

// It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

// For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error Cannot process should be thrown.

function updateUniqueItems(groceriesMap) {
    
    if (groceriesMap instanceof Map) {
        for (const [key, value] of groceriesMap) {
            if (value == 1) {
                groceriesMap.set(key, 100);
            }
        }
    } else {
        return TypeError('Cannot process')
    }

    return groceriesMap;
}

export default updateUniqueItems;