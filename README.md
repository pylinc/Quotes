# Daily Motivational Quotes

A simple web application that displays random motivational quotes using a custom API.

## API Endpoint

The application uses the following API endpoint:
```
https://motivational-quotes-api-7dbg.onrender.com/api/quotes/random
```

### API Response Format

The API returns JSON in the following format:
```json
{
  "quote": "Believe you can and you're halfway there.",
  "author": "Theodore Roosevelt"
}
```

## Features

- Random quote generation
- Display of quote and author
- Simple, clean interface
- Loading state handling
- Error handling

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API for making HTTP requests

## Usage

1. Open the web application in your browser
2. Click the "New Quote" button to generate a new quote
3. The quote and its author will be displayed on the screen

## Error Handling

The application includes error handling for:
- Failed API requests
- Network issues
- Missing author information (displays "Unknown")

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Open `index.html` in your web browser

## Project Structure

```
quotes/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

[Your chosen license]
