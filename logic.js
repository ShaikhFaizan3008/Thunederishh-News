const api_key="71b7c69be1e64144be150055c1a31c99";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("india"));

async function fetchNews(quary) {
    const res = await fetch(`${url}${quary}&apikey=${api_key}`);
    const data = await res.json();
    console.log(data);

}