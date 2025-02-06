import { fetchData } from "./fetchData";

const fetchPeople = async () => {
  console.log("Fetching People...");
  await fetchData("people");
};

fetchPeople();

export default fetchPeople;
