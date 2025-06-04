import { fetchData } from "./fetchData";

const fetchPlanets = async () => {
  console.log("Fetching Vehicles...");
  const rawvehiclesData = await fetchData("vehicles");
  return rawvehiclesData.map((vehicle) => ({
    ...vehicle,
    image: `./src/assets/images/vehicles/${vehicle.name
      .replaceAll(" ", "-")
      .replace("/", "_")}.png`,
  }));
};

// RENDER Planet CARD

const rendervehicles = async () => {
  //selecting elements
  const cardContainer = document.querySelector(".card__container");
  const cardList = document.querySelector(".card__list");

  // clear container
  cardContainer.innerHTML = "";
  cardList.innerHTML = "";

  const vehicles = await fetchPlanets();
  console.log("BEFORE RENDER: vehicles", vehicles);

  vehicles.forEach((vehicle) => {
    const cardImageContainer = document.createElement("div");
    const listItems = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    const img = document.createElement("img");

    img.src = vehicle.image;
    img.alt = vehicle.name;
    cardImageContainer.classList.add("card__image-container");

    img.classList.add("card__image");

    cardContainer.append(cardList);
    listItems.classList.add("card__list-items");
    itemTitle.classList.add("card__title");
    itemContent.classList.add("card__content");

    listItems.append(cardImageContainer, itemTitle, itemContent);

    // CARD CONTENT
    cardImageContainer.append(img);
    itemTitle.textContent = vehicle.name;
    const model = document.createElement("p");
    model.textContent = `Model: ${vehicle.model}`;
    const crew = document.createElement("p");
    crew.textContent = `crew: ${vehicle.crew}`;
    const length = document.createElement("p");
    length.textContent = `Length: ${vehicle.length}`;
    const passengers = document.createElement("p");
    passengers.textContent = `Passengers: ${vehicle.passengers}`;
    const maxSpeed = document.createElement("p");
    maxSpeed.textContent = `Max Speed: ${vehicle.max_atmosphering_speed}`;
    const manufacturer = document.createElement("p");
    manufacturer.textContent = `Terrain: ${vehicle.manufaturer}`;

    itemContent.append(model, crew, length, passengers, maxSpeed, manufacturer);

    cardList.append(listItems);
  });
};
export default rendervehicles;
