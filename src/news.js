const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=88ee8cbaaf7745988f37993bb5775daf";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}