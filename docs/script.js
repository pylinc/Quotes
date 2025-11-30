const quotebtn = document.querySelector(".quotes-btn");
const quote = document.querySelector(".quotes");
const authorp = document.querySelector(".author");

// Update this URL with your Render deployment URL
// Replace 'your-app-name' with your actual Render service name
const API_URL = "https://quotes-app-z76b.onrender.com/api/v1/getquote";

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

