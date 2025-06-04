const baseUrl = "https://swapi.py4e.com/api/";
export async function fetchData(category) {
  try {
    const apiUrl = baseUrl + category;

    const response = await fetch(apiUrl);

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching data for ${category}:`, error);
    return [];
  }
}
