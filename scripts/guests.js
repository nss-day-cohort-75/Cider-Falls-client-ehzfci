export const getGuests = async () => {
    const response = await fetch ("http://localhost:8088/guests")
    const guests = await response.json()

    let guestHTML = ""
    for (const guest of guests) {
        guestHTML += `
            <ul>
                <li>${guest.Name}</li>
            </ul>
        `
    }

return guestHTML

}