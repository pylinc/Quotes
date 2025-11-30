const quotebtn = document.querySelector(".quotes-btn");
const quote = document.querySelector(".quotes");
const authorp = document.querySelector(".author");

// Use relative URL for API - works on same domain (Render deployment)
// For GitHub Pages, use the full URL in docs/script.js
const API_URL = "/api/v1/getquote";

async function getquote() {
    quote.textContent = "Loading...";
    authorp.textContent = "";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Using the direct quote and author fields from JSON
        const text = data.quote;
        const author = data.author || "Unknown";

        quote.textContent = `"${text}"`;
        authorp.textContent = "Author - " + author;

    } catch (error) {
        console.error(error);
        quote.innerText = "Failed to load quote.";
    }
}

// Fix the duplicate event listener and cleanup
quotebtn?.addEventListener("click", getquote);
getquote();
