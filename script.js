const quotebtn = document.querySelector(".quotes-btn");
const quote = document.querySelector(".quotes");
const authorp  = document.querySelector(".author");

const API_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

async function getquote(){
    quote.textContent = "Loading...";
    authorp.textContent = "";

    try{
        const response = await fetch(API_URL);
        const data = await response.json();

        // Prefer the API's content field at data.data.content
        const text = data.data.content;
        const author = data.data.author;

        quote.textContent = `"${text}"`;
        authorp.textContent = "Author - " + author;
        
    } catch(error){
        console.error(error);
        quote.innerText = "Failed to load quote.";
    }
}

// wire up button and request one on load
quotebtn?.addEventListener("click", getquote);btn?.addEventListener("click", getquote);
getquote();
// document.addEventListener("DOMContentLoaded", getquote);
