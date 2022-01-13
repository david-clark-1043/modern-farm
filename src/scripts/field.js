
// declares the field array for the crops
let field = []
// takes the seeds as an object and adds them to field array
export const addPlant = (seedObject) => {
    // cornSeeds are two object arrays insted of a single object
    // need to check if the seedObject is an array and therefore a cornSeed
    const isCorn = Array.isArray(seedObject);
    if(isCorn) {
        for(const seed of seedObject){
            field.push(seed)
        }
    } else {
        field.push(seedObject);
    }
}
// returns the field array
export const usePlants = () => {
    return field
}