import { fetchData } from "./fetchData";

const fetchFilms = async () => {
  console.log("Fetching Films...");
  const rawfilmsData = await fetchData("films");
  console.log("debugging", rawfilmsData);

  return rawfilmsData.map((film) => ({
    ...film,
    image: `./src/assets/images/films/${film.title.replaceAll(" ", "-")}.jpg`,
  }));
};

// RENDER Planet CARD

const renderfilms = async () => {
  //selecting elements
  const cardContainer = document.querySelector(".card__container");
  const cardList = document.querySelector(".card__list");

  // clear container
  cardContainer.innerHTML = "";
  cardList.innerHTML = "";

  const films = await fetchFilms();
  console.log("BEFORE RENDER: Films", films);

  films.forEach((film) => {
    const cardImageContainer = document.createElement("div");
    const listItems = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    const img = document.createElement("img");

    img.src = film.image;
    img.alt = film.title;
    cardImageContainer.classList.add("card__image-container");

    img.classList.add("card__image");

    cardContainer.append(cardList);
    listItems.classList.add("card__list-items");
    itemTitle.classList.add("card__title");
    itemContent.classList.add("card__content");

    listItems.append(cardImageContainer, itemTitle, itemContent);

    // CARD CONTENT
    cardImageContainer.append(img);
    itemTitle.textContent = film.title;
    const openingCrawl = document.createElement("p");
    openingCrawl.textContent = `Opening Paragraph: ${film.opening_crawl}`;
    const director = document.createElement("p");
    director.textContent = `Director: ${film.director}`;
    const releaseDate = document.createElement("p");
    releaseDate.textContent = `Release Date: ${film.release_date}`;

    itemContent.append(openingCrawl, director, releaseDate);

    cardList.append(listItems);
  });
};
export default renderfilms;
