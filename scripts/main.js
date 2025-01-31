import { getServices } from "./Services.js";
import { getParks } from "./Parks.js";

const render = async () => {
    // Fetch services and parks data
    let Services = await getServices();
    let Parks = await getParks();

    // Generate the HTML structure
    const applicationHTML = `
    <h1>Cider Falls</h1>
    <article class="details">
        <section>
            <h2>Services</h2>
            ${Services}
        </section>
        <section>
            <h2>Parks</h2>
            ${Parks}
        </section>
    </article>

    <article class="Guests">
        <h1>Guests</h1>
        <h2></h2>
    </article>
    `;
    
    // Inject the generated HTML into the main container
    let maincontainer = document.getElementById('container');
    maincontainer.innerHTML = applicationHTML;
};

// Call the render function to display content
await render();
