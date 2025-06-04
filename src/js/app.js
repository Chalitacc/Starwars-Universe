/* import { fetchData } from "./fetchData.js"; */
import renderfilms from "./renderFilms.js";
import renderPeople from "./renderPeople.js";
import renderPlanets from "./renderPlanets.js";
import rendervehicles from "./renderVehicles.js";

// ADDING EVENT LISTENER

document.addEventListener("DOMContentLoaded", () => {
  const buttonContainer = document.querySelector(".category-container");
  const categoryButtons = document.querySelectorAll(
    ".category-container__buttons"
  );
  // Default
  renderPeople();

  buttonContainer.addEventListener("click", async (event) => {
    console.log(
      "Contains category-c-b",
      !event.target.classList.contains("category-container__buttons")
    );

    categoryButtons.forEach((button) => button.classList.remove("active"));

    event.target.classList.add("active");

    const category = event.target.id;

    if (category === "people") {
      renderPeople();
    } else if (category === "planets") {
      renderPlanets();
    } else if (category === "vehicles") {
      rendervehicles();
    } else if (category === "films") {
      renderfilms();
    }
  });
});
