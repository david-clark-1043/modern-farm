// takes the array of harvested crops as parameter
export const Catalog = (harvestedCrops) => {
    // iterates over each crop and adds a section for that crop to the <main> tag
    // <main> tag should have class="container" 
    for(const crop of harvestedCrops) {
        let main = document.querySelector(".container");
        main.innerHTML += `
        <section class="plant">${crop.type}</section>`
    }
}