// takes the field array as parameter
// returns final harvested crops using plan.output amount
export const harvestPlants = (plantField) => {
    let harvestedCrops = []

    for(let plant of plantField) {
        // Half of corn crop sold to ranchers, so only half as much available
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