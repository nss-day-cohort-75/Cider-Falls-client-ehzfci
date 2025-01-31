import { getServices } from "./Services.js"
import { getGuests } from "./guests.js"

const render = async () => {
    
    let Services = await getServices()
    let Guests = await getGuests()
    const applicationHTML = `
    <h1>Cider Falls</h1>
    <article class="details">
        <section>
            <h2>Services</h2>
            ${Services}
        </section>
        <section>
            <h2>Parks </h2>
            
        </section>
    </article>

    <article class="Guests">
    <h2>Guests</h2>
    ${Guests}      
    </article>
`
let maincontainer = document.getElementById('container')
maincontainer.innerHTML = applicationHTML

}

await render();