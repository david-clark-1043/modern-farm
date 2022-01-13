export const Catalog = (harvestedCrops) => {
    for(const crop of harvestedCrops) {
        let main = document.querySelector(".container");
        main.innerHTML += `
        <section class="plant">${crop.type}</section>`
    }
}