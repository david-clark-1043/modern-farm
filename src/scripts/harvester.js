
export const harvestPlants = (plantField) => {
    let harvestedCrops = []

    for(let plant of plantField) {
        if(plant.type === "Corn"){
            for (let step = 0; step < plant.output / 2; step++) {
                harvestedCrops.push(plant)
            }
        } else {
            for (let step = 0; step < plant.output; step++) {
                harvestedCrops.push(plant)
            }
        }
    }


    return harvestedCrops
}