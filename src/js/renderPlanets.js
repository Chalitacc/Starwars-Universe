import { fetchData } from "./fetchData";

const fetchPlanets = async () => {
  console.log("HELLO FROM PLANET");
  console.log("Fetching Planet...");
  const rawplanetsData = await fetchData("planets");
  return rawplanetsData.map((planet) => ({
    ...planet,
    image: `./src/assets/images/planets/${planet.name.replace(" ", "-")}.png`,
  }));
};

// RENDER Planet CARD

const renderPlanets = async () => {
  //selecting elements
  const cardContainer = document.querySelector(".card__container");
  const cardList = document.querySelector(".card__list");

  // clear container
  cardContainer.innerHTML = "";
  cardList.innerHTML = "";

  const planets = await fetchPlanets();
  console.log("BEFORE RENDER", planets);

  planets.forEach((planet, i) => {
    const cardImageContainer = document.createElement("div");
    const listItems = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    const img = document.createElement("img");

    img.src = planet.image;
    img.alt = planet.name;
    cardImageContainer.classList.add("card__image-container");

    img.classList.add("card__image");

    cardContainer.append(cardList);
    listItems.classList.add("card__list-items");
    itemTitle.classList.add("card__title");
    itemContent.classList.add("card__content");

    listItems.append(cardImageContainer, itemTitle, itemContent);

    cardImageContainer.append(img);
    itemTitle.textContent = planet.name;
    const climate = document.createElement("p");
    climate.textContent = `Climate: ${planet.climate}`;
    const diameter = document.createElement("p");
    diameter.textContent = `Diameter: ${planet.diameter}`;
    const gravity = document.createElement("p");
    gravity.textContent = `Gravity: ${planet.gravity}`;
    const orbitalPeriod = document.createElement("p");
    orbitalPeriod.textContent = `Orbital Period: ${planet.orbital_period}`;
    const population = document.createElement("p");
    population.textContent = `Population: ${planet.population}`;
    const terrain = document.createElement("p");
    terrain.textContent = `Terrain: ${planet.terrain}`;

    itemContent.append(
      climate,
      diameter,
      gravity,
      orbitalPeriod,
      population,
      terrain
    );

    cardList.append(listItems);
  });
};
export default renderPlanets;
