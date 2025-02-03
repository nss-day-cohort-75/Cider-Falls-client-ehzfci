export const getServices = async () => {
  const response = await fetch("http://localhost:8088/services");
  const services = await response.json();

  let servicesHTML = "";

  for (const service of services) {
    servicesHTML += `
                        <ul>
                        <li data-type="service" data-service-id="${service.id}" data-service-name="${service.name}">
                    ${service.name} </li>
                        </ul>`;
  }
  return servicesHTML;
};

const parkResponse = await fetch("http://localhost:8088/parksServices")
const parksServices = await parkResponse.json()

const parkAgain = await fetch("http://localhost:8088/parks")
const parks = await parkAgain.json()


// Function to find park names that offer the service
const findParksWithService = (serviceId) => {
  let parkIds = [];

  // Find all parkAreaIds linked to the service
  for (const parksService of parksServices) {
    if (parksService.parkServiceId === serviceId) {
      parkIds.push(parksService.parkAreaId);
    }
  }

  let parkNames = []

  // Match parkAreaIds to park names
  for (const park of parks) {
    for ( const parkId of parkIds){
    if (park.id == parkId) {
      parkNames.push(park.title)
    }
  }
  }
return parkNames
}
// Add click event listener
document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;

  if (clickTarget.dataset.type === "service") {
    const serviceId = parseInt(clickTarget.dataset.serviceId);
    const serviceName = clickTarget.dataset.serviceName;

    const parkNames = findParksWithService(serviceId)



    window.alert(`${serviceName} is available in: ${parkNames}`);
  }
});
