# Grammar API Module Structure

Tôi đã tách logic của file `route.ts` thành các module riêng biệt trong folder `generate/` để code dễ maintain và mở rộng hơn.

## Cấu trúc thư mục

```
app/api/grammar/
├── generate/
│   ├── types.ts                    # Định nghĩa tất cả types và interfaces
│   ├── certificate-helpers.ts     # Logic xử lý certificates (IELTS, TOEIC, etc.)
│   ├── level-helpers.ts           # Logic xử lý proficiency levels (A1-C2)
│   ├── grammar-forms.ts           # Logic generate grammar forms và options
│   ├── fallback-options.ts        # Logic generate fallback options cho từng exercise type
│   ├── prompt-generators.ts       # Logic generate prompts cho từng loại exercise
│   ├── response-transformer.ts    # Logic transform AI response
│   ├── analysis-helpers.ts        # Logic performance analysis
│   ├── base-instruction.ts        # Logic generate base instruction
│   └── index.ts                   # Export tất cả functions
├── route.ts                       # Main API route (đã được refactored)
└── route_old.ts                   # Backup của file cũ
```

## Chi tiết từng module

### 1. `types.ts`
- Chứa tất cả type definitions
- Các interfaces: `ExerciseType`, `ProficiencyLevel`, `CertificateType`, `RequestBody`, `ScoreData`, etc.

### 2. `certificate-helpers.ts`
- `getCertificateContext()`: Generate context cho từng loại certificate (IELTS, TOEIC, PTE, TOEFL, Cambridge, SAT, VSTEP)

### 3. `level-helpers.ts`
- `levelDescriptions`: Mô tả cho từng level A1-C2
- `getLevelContext()`: Generate level context
- `getLevelRequirements()`: Generate requirements cụ thể cho từng level

### 4. `grammar-forms.ts`
- `getGrammarForms()`: Generate grammar forms based on topic và level
- `generateGenericOptions()`: Generate options chung cho các exercise

### 5. `fallback-options.ts`
- `generateFallbackOptions()`: Main function generate fallback options
- Các functions riêng cho từng exercise type: `generateMultipleChoiceOptions`, `generateClozeOptions`, etc.

### 6. `prompt-generators.ts`
- `generatePromptForExerciseType()`: Main function generate prompt
- Các functions riêng cho từng exercise type: `generateMultipleChoicePrompt`, `generateFillInBlankPrompt`, etc.

### 7. `response-transformer.ts`
- `transformAIResponse()`: Transform AI response thành format chuẩn
- `extractQuestionContent()`: Extract question content từ AI response
- `validateAndGenerateOptions()`: Validate và generate options nếu cần

### 8. `analysis-helpers.ts`
- `generateAnalysisPrompt()`: Generate prompt cho performance analysis
- `generateFallbackAnalysis()`: Generate fallback analysis nếu AI fail

### 9. `base-instruction.ts`
- `generateBaseInstruction()`: Generate base instruction cho AI
- Include detailed analysis section nếu cần

## Lợi ích của cấu trúc mới

1. **Modular**: Mỗi module có trách nhiệm rõ ràng
2. **Maintainable**: Dễ maintain và debug
3. **Extensible**: Dễ thêm exercise types mới hoặc certificate types mới
4. **Reusable**: Các functions có thể reuse ở nơi khác
5. **Testable**: Dễ viết unit tests cho từng module
6. **Type Safe**: Full TypeScript support với proper type definitions

## Cách sử dụng

File `route.ts` chính bây giờ chỉ import các functions cần thiết từ `./generate` và orchestrate chúng lại:

```typescript
import {
  // Types
  ExerciseType,
  ProficiencyLevel,
  // ... other types
  
  // Helper functions  
  getCertificateContext,
  getLevelContext,
  generateBaseInstruction,
  generatePromptForExerciseType,
  transformAIResponse,
  generateAnalysisPrompt,
  generateFallbackAnalysis,
} from './generate';
```

## Thêm exercise type mới

1. Thêm type vào `ExerciseType` trong `types.ts`
2. Thêm generator function vào `prompt-generators.ts`
3. Thêm fallback options vào `fallback-options.ts`
4. Update main function trong `prompt-generators.ts`

Cấu trúc này giúp code clean, organized và dễ mở rộng trong tương lai!
