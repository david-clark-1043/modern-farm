import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createWheat } from "./seeds/wheat.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createPotato } from "./seeds/potato.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

console.log("Welcome to the main module");

const yearlyPlan = createPlan();
console.log(yearlyPlan);
plantSeeds(yearlyPlan);
const yearlyField = usePlants()
console.log("yearly field", yearlyField)
const harvestedCrops = harvestPlants(yearlyField)
console.log("harvested plants", harvestedCrops)
Catalog(harvestedCrops);

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

addPlant(potatoSeed)
const potatoField = usePlants()
console.log("potato field", potatoField)

addPlant(cornSeed)
const cornField = usePlants()
console.log("corn field", cornField)