import { getServices } from "./Services.js";
import { getParks } from "./Parks.js";
import { getGuests } from "./guests.js";
import { getFooterHTML } from "./Footer.js";


const render = async () => {
    
    let Services = await getServices()
    let Guests = await getGuests()
    let Parks = await getParks ()
    let Footer = getFooterHTML()

    const applicationHTML = `
    <h1>Cider Falls</h1>
    <img src="./media/image_720.png" class="logo" />
    <article class="details">
        <section>
            <h2>Services</h2>
            ${Services}
        </section>
        </article>
    <article class="Parks">
        <section>
            <h2>Parks</h2>
            ${Parks}
        </section>
    </article>

    <article class="Guests">
    <h2>Guests</h2>
    ${Guests}      
    </article>
    ${Footer}

    `;
    
    // Inject the generated HTML into the main container
    let maincontainer = document.getElementById('container');
    maincontainer.innerHTML = applicationHTML;
};

// Call the render function to display content
await render();
