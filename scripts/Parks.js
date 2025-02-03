export const getParks = async () => {
                                                                    
    const response = await fetch("http://localhost:8088/parks") // Fetch data from the parks API endpoint
    
    const parks = await response.json()  // Convert the response into JSON format
    

    // Initialize an empty string to store the HTML output
    let parksHTML = "";

    // Loop through the array of parks and generate an ordered list
    for (const park of parks) {
        parksHTML += `
            <ul>
                <li data-type="park" data-id="${park.id}">${park.title}</li>
            </ul>
        `;
    }
    
    // Return the generated HTML containing the list of parks
    return parksHTML;
};
const guestResponse = await fetch("http://localhost:8088/parkGuests")
const guests = await guestResponse.json()

document.addEventListener(
    "click",
    (clickEvent) => {
       const itemClicked = clickEvent.target
       const parkId = itemClicked.dataset.id
       if ( itemClicked.dataset.type === "park"){
           let guestCounter = 0

        for (const guest of guests) {
            if (parseInt(parkId) === guest.parkAreaId)
                guestCounter++
        }
        window.alert(`There are ${guestCounter} guests in this area`)
       }
    }
)