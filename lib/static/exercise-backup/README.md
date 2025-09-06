# Grammar Exercise Backup System

## Overview

This backup system provides static grammar exercises when the AI API fails. It ensures users always receive exercises even during API outages or errors.

## Structure

```
lib/static/exercise-backup/
├── index.ts                    # Main entry point
├── comprehensive-backups.ts    # Complete backup database
├── specific-backups.ts         # Topic-specific backups
├── certificate-backups.ts      # Certificate-specific backups (IELTS, TOEIC, etc.)
├── generic-backup.ts          # Generic backup generator
└── question-data.ts           # Question data helpers
```

## Features

### ✅ Complete Coverage

- **All Grammar Topics**: present simple, past simple, present perfect, modals, passive voice, conditionals, articles, prepositions, comparative/superlative, question forms, relative clauses, gerunds/infinitives, etc.
- **All Exercise Types**: multiple-choice, fill-in-blank, sentence-completion, error-correction, reading-comprehension, word-order, matching, cloze-test, transformation, true-false-lightning, etc.
- **All CEFR Levels**: A1, A2, B1, B2, C1, C2
- **All Certificates**: IELTS, TOEIC, TOEFL, Cambridge, PTE, SAT, VSTEP

### 🎯 Smart Fallback System

1. **Comprehensive Backup** (First Priority) - Most complete database
2. **Certificate-Specific Backup** (If certificate selected)
3. **Generic Backup** (Final fallback)
4. **Level Adjustment** - Uses closest level if exact level unavailable

### 📚 Certificate-Specific Content

- **IELTS**: Academic writing style, formal language, research vocabulary
- **TOEIC**: Business context, workplace scenarios, professional communication
- **TOEFL**: Academic English, university settings, scientific contexts
- **Cambridge**: General English proficiency, varied contexts

## Usage

The backup system is automatically triggered when:

- AI API is unavailable
- AI response is invalid
- Network errors occur
- Parsing errors happen

```typescript
// Automatically called from API route
const backupExercise = getBackupExercise(
  "present simple", // Grammar topic
  "multiple-choice", // Exercise type
  "B1", // CEFR level
  5, // Number of questions
  "IELTS" // Certificate type (optional)
);
```

## Example Backup Exercise

### Present Simple - IELTS Academic (B1)

```json
{
  "title": "Present Simple - IELTS Academic Writing (B1)",
  "questions": [
    {
      "id": 1,
      "question": "The graph _____ a significant increase in renewable energy usage.",
      "options": ["show", "shows", "showing", "showed"],
      "correct": 1,
      "explanation": "In academic writing, 'graph' is singular so use 'shows'.",
      "tip": "IELTS Academic: The chart/graph/table shows/illustrates/demonstrates",
      "tense": "present simple",
      "type": "multiple-choice"
    }
  ],
  "type": "multiple-choice"
}
```

## Lightning Game Support

Special support for true-false-lightning exercises:

```json
{
  "lightningData": {
    "sentence": "She go to school every day.",
    "timeLimit": 10,
    "correctness": false,
    "errorType": "verb agreement",
    "quickExplanation": "Should be 'goes' - third person singular needs -s"
  }
}
```

## API Integration

The backup system is integrated into `/api/grammar/route.ts` with automatic failover:

```typescript
try {
  // Try AI API first
  const aiResponse = await callAI(prompt, provider);
  // Process AI response...
} catch (aiError) {
  console.log("🚨 AI API failed, using backup exercises");

  const backupExercise = getBackupExercise(
    grammarText,
    exerciseType,
    proficiencyLevel,
    numExercises,
    certificateType
  );

  return { exercise: backupExercise, source: "backup" };
}
```

## Console Logging

The system provides detailed logging:

- `🔍 Looking for backup:` - Search parameters
- `✅ Using comprehensive backup` - Best option found
- `📚 Using specific backup` - Topic-specific backup
- `📝 Using generic backup` - Fallback option
- `⚠️ Using closest level` - Level adjustment

## Benefits

1. **100% Uptime**: Users always get exercises
2. **Quality Content**: Hand-crafted, pedagogically sound questions
3. **Certificate Alignment**: Content matches exam requirements
4. **Smart Fallbacks**: Graceful degradation with level adjustment
5. **Comprehensive Coverage**: All topics, types, and levels supported

## Maintenance

To add new backup content:

1. Add questions to `comprehensive-backups.ts` for general content
2. Add to `certificate-backups.ts` for certificate-specific content
3. Follow the existing TypeScript interfaces
4. Test with different combinations of parameters

## Testing

Test the backup system by:

1. Using invalid AI provider
2. Disconnecting from internet
3. Using non-existent grammar topics
4. Requesting unavailable combinations
