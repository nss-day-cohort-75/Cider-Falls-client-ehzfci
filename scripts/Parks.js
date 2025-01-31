export const getParks = async () => {
                                                                    
    const response = await fetch("http://localhost:8088/parks") // Fetch data from the parks API endpoint
    
    const parks = await response.json()  // Convert the response into JSON format
    

    // Initialize an empty string to store the HTML output
    let parksHTML = "";

    // Loop through the array of parks and generate an ordered list
    for (const park of parks) {
        parksHTML += `
            <ul>
                <li>${park.title}</li>
            </ul>
        `;
    }
    
    // Return the generated HTML containing the list of parks
    return parksHTML;
};