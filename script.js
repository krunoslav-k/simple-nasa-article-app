let endpoint = "https://api.spaceflightnewsapi.net/v4/articles";
const bodyEl = document.querySelector("body");
const articlesWrapperEl = renderArticlesWrapper();
const prevButtonEl = document.querySelector(".previous-button");
const nextButtonEl = document.querySelector(".next-button");
let articlesData = [];

async function fetchAndRenderArticlesData() {
  const responseData = await fetch(endpoint, { method: "GET" });
  articlesData = await responseData.json();

  console.log(articlesData);

  articlesData.results.forEach((article) => {
    const header2El = renderHeader2El(article);
    const imageEl = renderImageEl(article);
    const paragraphEl = renderParagraphEl(article);

    renderArticle(header2El, imageEl, paragraphEl, articlesWrapperEl);
  });
}

function renderArticlesWrapper() {
  const articlesWrapperEl = document.createElement("div");
  articlesWrapperEl.classList.add("articles-wrapper");
  bodyEl.appendChild(articlesWrapperEl);
  return articlesWrapperEl;
}

function renderArticle(header2El, imageEl, paragraphEl, articlesWrapperEl) {
  const articleEl = document.createElement("article");
  articleEl.append(header2El, imageEl, paragraphEl);
  articlesWrapperEl.appendChild(articleEl);
}

function renderHeader2El(articlesData) {
  const header2El = document.createElement("h2");
  header2El.classList.add("article-title");
  header2El.textContent = articlesData.title;
  return header2El;
}

function renderImageEl(articlesData) {
  const imageEl = document.createElement("img");
  imageEl.classList.add("article-image");
  imageEl.src = articlesData.image_url;
  return imageEl;
}

function renderParagraphEl(articlesData) {
  const paragraphEl = document.createElement("p");
  paragraphEl.classList.add("article-paragraph");
  paragraphEl.innerText = articlesData.summary;
  return paragraphEl;
}

fetchAndRenderArticlesData();

nextButtonEl.addEventListener("click", () => {
  endpoint = articlesData.next;
  articlesWrapperEl.replaceChildren();
  fetchAndRenderArticlesData();
});

prevButtonEl.addEventListener("click", () => {
  endpoint = articlesData.previous;
  articlesWrapperEl.replaceChildren();
  fetchAndRenderArticlesData();
});
