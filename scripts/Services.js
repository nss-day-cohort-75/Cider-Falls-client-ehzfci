export const getServices = async () => {
    const response = await fetch ("http://localhost:8088/services")
    const services = await response.json()

    let servicesHTML = ""


    for (const service of services )
        {
        servicesHTML += `
                        <ol>
                        <li>${service.name}</li>
                        </ol>
                        `
    }
    return servicesHTML
}