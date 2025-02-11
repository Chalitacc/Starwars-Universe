import { fetchData } from "./fetchData";

const fetchPeople = async () => {
  console.log("Fetching People...");
  const rawpeopleeData = await fetchData("people");
  const peopleData = rawpeopleeData.map((p) => ({
    ...p,
    image: `./src/assets/images/people/${p.name.replace(" ", "-")}.png`,
  }));

  console.log("test", peopleData);
  renderPeople(peopleData);
};

const easyImages = [
  "./src/assets/images/people/Luke-Skywalker.png",
  "./src/assets/images/people/C-3PO.png",
  "./src/assets/images/people/Darth-Vader.png",
  "./src/assets/images/people/Leia-Organa.png",
  "./src/assets/images/people/Owen-Lars.png",
  "./src/assets/images/people/Beru Whitesun lars.png",
  "./src/assets/images/people/R5-D4.png",
  "./src/assets/images/people/Biggs-Darklighter.png",
  "./src/assets/images/people/Obi-Wan-Kenobi.png",
];

// RENDER PEOPLE CARD

const renderPeople = (people) => {
  //selecting elements
  const cardContainer = document.querySelector(".card__container");
  const cardList = document.querySelector(".card__list");

  // clear container
  cardContainer.innherhtml = "";

  people.forEach((person, i) => {
    const card = document.createElement("div");
    const cardImageContainer = document.createElement("div");
    const listItems = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    const img = document.createElement("img");
    const imageUrl = easyImages[i];
    img.src = person.image;
    img.alt = person.name;
    cardImageContainer.classList.add("card__image-container");
    img.classList.add("card__image");

    cardContainer.append(card);
    card.append(cardList);

    listItems.classList.add("card__list-items");
    itemTitle.classList.add("card__title");
    itemContent.classList.add("card__content");

    listItems.append(cardImageContainer, itemTitle, itemContent);
    cardImageContainer.append(img);

    itemTitle.textContent = person.name;

    const height = document.createElement("p");
    height.textContent = `Height: ${person.height}`;
    const birthYear = document.createElement("p");
    birthYear.textContent = `Height: ${person.birth_year}`;
    const eyecolor = document.createElement("p");
    eyecolor.textContent = `Height: ${person.eye_color}`;
    const hairColor = document.createElement("p");
    hairColor.textContent = `Hair Color: ${person.hair_color}`;
    const gender = document.createElement("p");
    gender.textContent = `Gender: ${person.gender}`;

    itemContent.append(birthYear, gender, height, eyecolor, hairColor);

    cardList.append(listItems);

    return cardContainer;
  });
};

fetchPeople();
export default renderPeople;
