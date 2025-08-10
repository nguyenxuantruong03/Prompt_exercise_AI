# Exercise Components Refactoring

## Tổng quan

File `exercise.tsx` ban đầu đã được tách thành nhiều component nhỏ hơn để dễ quản lý và bảo trì hơn.

## Cấu trúc mới

### 📁 `/components`

Thư mục chứa tất cả các component con đã được tách ra:

#### `ExerciseHeader.tsx`

- **Chức năng**: Hiển thị header của exercise
- **Bao gồm**:
  - Tiêu đề exercise
  - Thông báo về feature Grammar Analysis cho user A1-B2

#### `QuestionItem.tsx`

- **Chức năng**: Component cho từng câu hỏi
- **Bao gồm**:
  - Header câu hỏi với analysis button và hint button
  - Phần hint có thể thu gọn
  - Render nội dung câu hỏi
  - Phần kết quả và explanation
  - Nút generate similar questions

#### `QuestionRenderer.tsx`

- **Chức năng**: Render các loại câu hỏi khác nhau
- **Hỗ trợ các loại câu hỏi**:
  - Multiple choice
  - Fill-in-blank
  - Reading comprehension
  - Error correction
  - Word order
  - Matching
  - Sentence combining/building
  - Word formation
  - Verb conjugation

#### `ExerciseActions.tsx`

- **Chức năng**: Các nút action chính
- **Bao gồm**:
  - Nút "Check Answers"
  - Nút "Download Options"
  - Nút "Show Score & Analysis" (sau khi check answers)

#### `DownloadOptions.tsx`

- **Chức năng**: Component hiển thị tùy chọn download
- **Bao gồm**:
  - Download as PDF/Text
  - Download as Word
  - Thông tin về nội dung download

#### `ScoreCalculator.tsx`

- **Chức năng**: Hook và logic tính điểm
- **Bao gồm**:
  - Hook `useScoreCalculator`
  - Tính điểm user
  - Ước tính điểm các bài test (IELTS, TOEFL, TOEIC, Cambridge, VSTEP)
  - Phân tích performance qua AI
  - Lưu trữ mistakes vào localStorage

#### `index.ts`

- **Chức năng**: Export tất cả components để dễ import

## File chính

### `exercise.tsx`

File chính đã được đơn giản hóa:

- Sử dụng các component đã tách
- Chỉ chứa logic state management chính
- Các useEffect cho auto-analysis
- Handlers chính như grammar analysis, toggle hint, etc.

## Lợi ích của việc refactoring

### ✅ Dễ bảo trì

- Mỗi component có trách nhiệm rõ ràng
- Dễ tìm và sửa bugs
- Code dễ đọc hơn

### ✅ Tái sử dụng

- Các component có thể được sử dụng ở nơi khác
- Logic tính điểm có thể dùng cho các exercise khác

### ✅ Testing

- Dễ viết unit test cho từng component
- Có thể test riêng từng chức năng

### ✅ Performance

- Có thể optimize riêng từng component
- React.memo có thể áp dụng hiệu quả hơn

### ✅ Phát triển team

- Nhiều developer có thể làm việc song song
- Ít conflict khi merge code

## Cách sử dụng

```tsx
import {
  ExerciseHeader,
  DownloadOptions,
  ExerciseActions,
  QuestionItem,
  useScoreCalculator,
} from "./components";

// Trong component chính
const { createCalculateAndShowScore } = useScoreCalculator();
```

## Backup

File gốc đã được backup tại `exercise-backup.tsx` để tham khảo khi cần thiết.
