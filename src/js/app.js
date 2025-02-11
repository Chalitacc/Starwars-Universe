import { fetchData } from "./fetchData.js";
import renderPeople from "./renderPeople.js";

// ADDING EVENT LISTENER

document.addEventListener("DOMContentLoaded", () => {
  const buttonContainer = document.querySelector(".category-container");
  const categoryButtons = document.querySelectorAll(
    ".category-container__buttons"
  );

  const renderFunction = {
    people: renderPeople,
  };

  buttonContainer.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("category-container__buttons")) return;

    categoryButtons.forEach((button) => button.classList.remove("active"));

    event.target.classList.add("active");

    const category = event.target.id;

    const data = await fetchData(category);

    if (renderFunction[category]) {
      renderFunction[category](data);
    }
  });

  fetchData("people").then((data) => renderPeople(data));
});
