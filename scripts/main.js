import { getServices } from "./Services.js"


const render = async () => {
    
    let Services = await getServices()

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
    <h1>Guests</h1>
        <h2></h2>
    </article>
`
let maincontainer = document.getElementById('container')
maincontainer.innerHTML = applicationHTML

}

await render();