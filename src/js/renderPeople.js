import { fetchData } from "./fetchData";

const fetchPeople = async () => {
  const rawpeopleeData = await fetchData("people");

  return rawpeopleeData.map((person) => ({
    ...person,
    image: `./src/assets/images/people/${person.name.replaceAll(" ", "-")}.png`,
  }));
};

// RENDER PEOPLE CARD

const renderPeople = async () => {
  //selecting elements

  const cardList = document.querySelector(".card__list");

  // clear container
  cardList.innerHTML = "";

  const people = await fetchPeople();

  people.forEach((person) => {
    const cardImageContainer = document.createElement("div");
    const listItems = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    const img = document.createElement("img");

    img.src = person.image;
    img.alt = person.name;
    cardImageContainer.classList.add("card__image-container");
    img.classList.add("card__image");

    // cardContainer.append(cardList);

    listItems.classList.add("card__list-items");
    itemTitle.classList.add("card__title");
    itemContent.classList.add("card__content");

    listItems.append(cardImageContainer, itemTitle, itemContent);

    // CARD CONTENT
    cardImageContainer.append(img);
    itemTitle.textContent = person.name;
    const gender = document.createElement("p");
    gender.textContent = `Gender: ${person.gender}`;
    const height = document.createElement("p");
    height.textContent = `Height: ${person.height}`;

    const birthYear = document.createElement("p");
    birthYear.textContent = `Birth Year: ${person.birth_year}`;
    const eyecolor = document.createElement("p");
    eyecolor.textContent = `Eye Color: ${person.eye_color}`;
    const hairColor = document.createElement("p");
    hairColor.textContent = `Hair Color: ${person.hair_color}`;

    itemContent.append(birthYear, gender, height, eyecolor, hairColor);
    cardList.append(listItems);
  });
};

export default renderPeople;
