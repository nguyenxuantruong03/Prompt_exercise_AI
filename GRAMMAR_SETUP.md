# AI Grammar Exercise Generator

This is a Next.js application that uses AI to generate grammar exercises and automatically fix grammar errors in text.

## Features

- **Generate Grammar Exercises**: Input a topic or text to generate multiple-choice grammar questions
- **Auto Grammar Fixing**: Input text with grammar errors and get corrected text with explanations
- **Interactive UI**: Tab-based interface with real-time feedback
- **Dark Mode Support**: Built with Tailwind CSS for responsive design

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get an OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy your API key

### 3. Configure Environment Variables

1. Open `.env.local` file in the root directory
2. Replace `your_openai_api_key_here` with your actual OpenAI API key:

```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Navigate to Grammar Exercise

Go to [http://localhost:3000/exercise-grammar](http://localhost:3000/exercise-grammar) to use the grammar exercise generator.

## How to Use

### Generate Exercise Mode

1. Click on "Generate Exercise" tab
2. Enter a grammar topic (e.g., "past tense verbs", "conditional sentences")
3. Click "Generate Exercise" button
4. Answer the multiple choice questions
5. Click "Check Answers" to see results with explanations

### Fix Grammar Mode

1. Click on "Fix Grammar" tab
2. Enter text with grammar errors
3. Click "Fix Grammar" button
4. View the corrected text and detailed error explanations

## API Endpoints

### POST /api/grammar

Handles both exercise generation and grammar fixing.

**Request Body:**

```json
{
  "text": "Your input text here",
  "action": "generate" // or "fix"
}
```

**Response for Generate:**

```json
{
  "exercise": {
    "title": "Grammar Exercise Title",
    "questions": [
      {
        "id": 1,
        "question": "Question text",
        "options": ["A) option1", "B) option2", "C) option3", "D) option4"],
        "correct": 0,
        "explanation": "Why this answer is correct"
      }
    ]
  }
}
```

**Response for Fix:**

```json
{
  "corrected": "Corrected text here",
  "errors": [
    {
      "original": "incorrect text",
      "corrected": "correct text",
      "explanation": "explanation of the error"
    }
  ]
}
```

## Project Structure

```
exercise/
├── app/
│   ├── api/
│   │   └── grammar/
│   │       └── route.ts          # AI API handler
│   ├── exercise-grammar/
│   │   └── page.tsx              # Main grammar exercise component
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── .env.local                    # Environment variables
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Environment Variables

| Variable          | Description                         | Required |
| ----------------- | ----------------------------------- | -------- |
| `OPENAI_API_KEY`  | Your OpenAI API key                 | Yes      |
| `NEXTAUTH_URL`    | Your app URL (for production)       | No       |
| `NEXTAUTH_SECRET` | Secret for NextAuth (if using auth) | No       |

## Troubleshooting

### Common Issues

1. **"API key not configured" error**: Make sure you've added your OpenAI API key to `.env.local`
2. **"Failed to generate exercise" error**: Check your internet connection and API key validity
3. **Loading forever**: Check browser console for errors and verify API key is correct

### API Key Issues

- Make sure your OpenAI account has credits
- Verify the API key is correctly copied without extra spaces
- Check if your API key has the necessary permissions

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **OpenAI API**: GPT-3.5-turbo for text generation
- **React Hooks**: State management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please check OpenAI's usage policies when using their API.
