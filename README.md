# Text Humanizer API

A Node.js server that uses OpenAI's GPT-3.5-turbo to transform formal text into more natural, human-like language.

## Features
- Transforms formal text into casual, conversational language
- Easy-to-use REST API
- Built with Express.js and OpenAI API

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm
- OpenAI API key

### Installation
1. Clone the repository:
```bash
git clone [your-repo-url]
cd text-humanizer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
OPENAI_API_KEY=your_api_key_here
```

4. Start the server:
```bash
npm start
```

### Setting Up OpenAI API
1. Visit [OpenAI Platform](https://platform.openai.com)
2. Create an account or log in
3. Go to API Keys section
4. Create a new secret key
5. Add payment method:
   - Go to Billing section
   - Set up paid account
   - Add payment method
   - Set usage limits (optional)

### Using the API
Make a POST request to `/api/humanize`:
```bash
curl -X POST http://localhost:3000/api/humanize \
  -H "Content-Type: application/json" \
  -d '{"input": "Your formal text here"}'
```

Example response:
```json
{
  "transformedText": "Humanized version of your text",
  "original": "Your input text"
}
```

## Tips
- Keep input texts concise for better results
- Monitor your API usage through OpenAI dashboard
- Consider implementing caching for frequently used transformations
- Test the API with various types of formal text to understand its capabilities
