const endpoint = "https://api.spaceflightnewsapi.net/v4/articles";
const bodyEl = document.querySelector("body");
let articlesData = [];

async function fetchAndRenderArticlesData() {
  const responseData = await fetch(endpoint, { method: "GET" });
  articlesData = await responseData.json();

  //console.log(articlesData.results);

  const header2El = renderHeader2El(articlesData);
  const imageEl = renderImageEl(articlesData);
  const paragraphEl = renderParagraphEl(articlesData);

  renderArticle(header2El, imageEl, paragraphEl);
}

function renderArticle(header2El, imageEl, paragraphEl) {
  const articleEl = document.createElement("article");
  articleEl.append(header2El, imageEl, paragraphEl);
  bodyEl.appendChild(articleEl);
}

function renderHeader2El(articlesData) {
  const header2El = document.createElement("h2");
  header2El.textContent = articlesData.results[1].title;
  return header2El;
}

function renderImageEl(articlesData) {
  const imageEl = document.createElement("img");
  imageEl.src = articlesData.results[0].image_url;
  return imageEl;
}

function renderParagraphEl(articlesData) {
  const paragraphEl = document.createElement("p");
  paragraphEl.innerText = articlesData.results[1].summary;
  return paragraphEl;
}

fetchAndRenderArticlesData();
