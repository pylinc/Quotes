# Quote of the Day

Simple static web app that fetches and displays a random quote from a public API. Includes a styled card, author badge, and a button to request a new quote.

## Preview
Open `Quotes/index.html` in your browser or run a local static server and click "Give me a quote".

## Files
- Quotes/index.html — app markup
- Quotes/style.css — styles and layout
- Quotes/script.js — fetch logic and DOM updates

## Features
- Fetches random quote from: `https://api.freeapi.app/api/v1/public/quotes/quote/random`
- Displays quote content and author only (uses `data.data.content` and `data.data.author`)
- Responsive card UI with decorative quote marks

## Quick start

Option A — open directly
1. Double-click `Quotes/index.html` or open it in your browser.

Option B — serve with Python (recommended to avoid some CORS/asset issues)
1. Open PowerShell or Command Prompt in `d:\Web Dev\Project`
2. Run:
   - Python 3: `python -m http.server 5500`
3. Visit `http://localhost:5500/Quotes/index.html`

Option C — serve with VS Code Live Server
1. Install Live Server extension.
2. Right-click `Quotes/index.html` → "Open with Live Server".

## Troubleshooting
- If quotes don't appear, ensure you have an internet connection and the API is reachable.
- If you see CORS or network errors, serve the files over HTTP (see Quick start Option B/C).
- Check DevTools Console for errors. The script logs failures and will show "Failed to load quote." in the UI on error.

## Development notes
- UI text is in `.quotes` and author is `.author`.
- Script extracts `data.data.content` and `data.data.author`. Adjust `script.js` if API shape changes.
- Styling is in `Quotes/style.css` — modify `.quotes::before` and `.quotes::after` to change decorative marks and spacing.

## License
MIT — copy and modify freely.
