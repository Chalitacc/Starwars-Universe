const baseUrl = "https://swapi.dev/api/";

export async function fetchData(category) {
  try {
    let apiURL;

    switch (category) {
      case "people":
        apiURL = `${baseUrl}people/`;
        console.log("Fetched People");

        break;

      case "films":
        apiURL = `${baseUrl}films/`;
        console.log("Fetched films");

        break;

      case "vehicles":
        apiURL = `${baseUrl}vehicles/`;
        console.log("Fetched vehicles");

        break;

      case "planets":
        apiURL = `${baseUrl}planets/`;
        console.log("Fetched planets");

        break;

      default:
        throw new Error("invalid category");
    }
    const response = await fetch(apiURL);

    const data = await response.json();
    console.log(`Fetched data for ${category}:`, data);
    return data.results;
  } catch (error) {
    console.error(`Error fetching data for ${category}:`, error);
    return [];
  }
}
