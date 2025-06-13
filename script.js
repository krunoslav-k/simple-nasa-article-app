const endpoint = "https://api.spaceflightnewsapi.net/v4/articles";
const bodyEl = document.querySelector("body");
let articlesData = [];

async function fetchAndRenderArticlesData() {
  const responseData = await fetch(endpoint, { method: "GET" });
  articlesData = await responseData.json();

  console.log(articlesData.results);

  articlesData.results.forEach((article) => {
    const header2El = renderHeader2El(article);
    const imageEl = renderImageEl(article);
    const paragraphEl = renderParagraphEl(article);

    renderArticle(header2El, imageEl, paragraphEl);
  });
}

function renderArticle(header2El, imageEl, paragraphEl) {
  const articleEl = document.createElement("article");
  articleEl.append(header2El, imageEl, paragraphEl);
  bodyEl.appendChild(articleEl);
}

function renderHeader2El(articlesData) {
  const header2El = document.createElement("h2");
  header2El.textContent = articlesData.title;
  return header2El;
}

function renderImageEl(articlesData) {
  const imageEl = document.createElement("img");
  imageEl.src = articlesData.image_url;
  return imageEl;
}

function renderParagraphEl(articlesData) {
  const paragraphEl = document.createElement("p");
  paragraphEl.innerText = articlesData.summary;
  return paragraphEl;
}

fetchAndRenderArticlesData();
