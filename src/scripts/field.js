let field = []

export const addPlant = (seedObject) => {
    const isCorn = Array.isArray(seedObject);
    if(isCorn) {
        for(const seed of seedObject){
            field.push(seed)
        }
    } else {
        field.push(seedObject);
    }
}

export const usePlants = () => {
    return field
}