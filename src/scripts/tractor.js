// imports seed functions
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createWheat } from "./seeds/wheat.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createPotato } from "./seeds/potato.js";
import { addPlant } from "./field.js";

// takes yearly plan array as parameter
// iterates
// creates seed per yearly plan and uses addPlant() to add them to field array in field.js
export const plantSeeds = (yearlyPlan) => {
    for(const row of yearlyPlan) {
        for(const seed of row) {
            if(seed === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            } else if(seed === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if(seed === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            } else if(seed === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if(seed === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if(seed === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
        }
    }
}