const endpoint = "https://api.spaceflightnewsapi.net/v4/articles";
const bodyEl = document.querySelector("body");
let articlesData = [];

async function fetchArticlesData() {
  const responseData = await fetch(endpoint, { method: "GET" });
  articlesData = await responseData.json();

  console.log(articlesData.results);

  const articleEl = document.createElement("article");
  const header2El = document.createElement("h2");
  header2El.textContent = articlesData.results[1].title;
  const imageEl = document.createElement("img");
  imageEl.src = articlesData.results[0].image_url;
  const paragraphEl = document.createElement("p");
  paragraphEl.innerText = articlesData.results[1].summary;

  articleEl.append(header2El, imageEl, paragraphEl);

  bodyEl.appendChild(articleEl);
}

fetchArticlesData();
