// Static data for PDF benefits and tips - helps with performance by avoiding re-creation
export const PDF_BENEFITS = [
  {
    icon: "📱",
    title: "Học Offline",
    description: "Không cần kết nối internet để học tập",
    bgColor: "bg-blue-100",
  },
  {
    icon: "🖨️",
    title: "In Ấn Dễ Dàng",
    description: "Format chuẩn, phù hợp để in ra giấy",
    bgColor: "bg-green-100",
  },
  {
    icon: "💾",
    title: "Lưu Trữ Lâu Dài",
    description: "Tài liệu không bị mất, luôn có sẵn",
    bgColor: "bg-purple-100",
  },
  {
    icon: "📚",
    title: "Chia Sẻ Tiện Lợi",
    description: "Dễ dàng chia sẻ với bạn bè, gia sư",
    bgColor: "bg-yellow-100",
  },
] as const;

export const HOW_TO_USE_STEPS = [
  {
    step: "1",
    title: "Chọn Chủ Đề",
    description: "Click vào thẻ chủ đề mà bạn muốn học",
    color: "bg-blue-500",
  },
  {
    step: "2",
    title: "Xem Chi Tiết",
    description: "Duyệt qua danh sách các ngữ pháp trong chủ đề",
    color: "bg-green-500",
  },
  {
    step: "3",
    title: "Tải PDF",
    description: "Nhấn nút tải để có PDF chất lượng cao",
    color: "bg-purple-500",
  },
] as const;

export const PDF_CONTENT_FEATURES = [
  "Lý thuyết chi tiết và dễ hiểu",
  "Ví dụ minh họa cụ thể",
  "Bài tập thực hành với đáp án",
  "Ghi chú quan trọng và mẹo nhớ",
  "Cấu trúc câu thường gặp",
] as const;

export const PDF_HIGHLIGHTS = [
  { icon: "📝", text: "Format chuyên nghiệp, dễ đọc" },
  { icon: "🔍", text: "Có mục lục và chỉ mục từ khóa" },
  { icon: "🌐", text: "Song ngữ Việt - Anh" },
  { icon: "📊", text: "Bảng tóm tắt và so sánh" },
  { icon: "💡", text: "Tips học tập hiệu quả" },
] as const;

export const LEARNING_TIPS = [
  {
    icon: "📅",
    title: "Học Theo Kế Hoạch",
    description:
      "Chia nhỏ từng chủ đề, học mỗi ngày 1-2 topic để không bị áp lực",
    bgColor: "bg-blue-50",
  },
  {
    icon: "✍️",
    title: "Ghi Chép Tay",
    description: "Viết tay giúp ghi nhớ tốt hơn. In PDF ra và ghi chú bên lề",
    bgColor: "bg-green-50",
  },
  {
    icon: "🔄",
    title: "Ôn Tập Định Kỳ",
    description: "Xem lại các chủ đề đã học sau 1 tuần, 1 tháng để củng cố",
    bgColor: "bg-purple-50",
  },
  {
    icon: "💬",
    title: "Thực Hành Nói",
    description: "Áp dụng ngay vào câu nói hàng ngày để nhớ lâu hơn",
    bgColor: "bg-yellow-50",
  },
  {
    icon: "👥",
    title: "Học Nhóm",
    description: "Chia sẻ PDF với bạn bè, cùng nhau học và kiểm tra lẫn nhau",
    bgColor: "bg-red-50",
  },
  {
    icon: "📱",
    title: "Học Mọi Lúc",
    description: "PDF trên điện thoại giúp bạn học trong thời gian rảnh",
    bgColor: "bg-indigo-50",
  },
] as const;

export const PDF_FORMATS = [
  {
    icon: "📖",
    title: "PDF Tiêu Chuẩn",
    description: "Format PDF thông thường, tối ưu cho đọc trên màn hình",
    size: "~5-8MB",
    features: ["Chất lượng cao", "Tải nhanh", "Tiết kiệm dung lượng"],
  },
  {
    icon: "🖨️",
    title: "PDF In Ấn",
    description: "Tối ưu cho việc in ra giấy A4 với layout chuyên nghiệp",
    size: "~8-12MB",
    features: ["Layout in ấn", "Font rõ nét", "Margin chuẩn"],
  },
  {
    icon: "📱",
    title: "PDF Mobile",
    description: "Tối ưu cho điện thoại với font size và spacing phù hợp",
    size: "~3-5MB",
    features: ["Font lớn", "Dễ đọc mobile", "Tải siêu nhanh"],
  },
] as const;

export const PDF_USAGE_SCENARIOS = [
  {
    icon: "🎓",
    title: "Học Sinh - Sinh Viên",
    scenarios: [
      "Ôn thi IELTS, TOEFL, TOEIC",
      "Chuẩn bị bài kiểm tra tại trường",
      "Làm bài tập về nhà",
      "Học nhóm cùng bạn bè",
    ],
  },
  {
    icon: "👨‍🏫",
    title: "Giáo Viên - Gia Sư",
    scenarios: [
      "Chuẩn bị giáo án giảng dạy",
      "Tạo đề kiểm tra cho học sinh",
      "Tài liệu tham khảo bổ sung",
      "Chia sẻ với đồng nghiệp",
    ],
  },
  {
    icon: "💼",
    title: "Người Đi Làm",
    scenarios: [
      "Cải thiện tiếng Anh công sở",
      "Chuẩn bị thuyết trình bằng tiếng Anh",
      "Học trong giờ nghỉ trưa",
      "Nâng cao kỹ năng giao tiếp",
    ],
  },
] as const;

export const DOWNLOAD_OPTIONS = [
  {
    icon: "⚡",
    title: "Tải Ngay",
    description: "Tải PDF ngay lập tức sau khi click",
    time: "< 5 giây",
    color: "bg-green-100",
  },
  {
    icon: "📧",
    title: "Gửi Email",
    description: "Nhận PDF qua email để lưu trữ dài hạn",
    time: "< 1 phút",
    color: "bg-blue-100",
  },
  {
    icon: "☁️",
    title: "Lưu Cloud",
    description: "Lưu vào Google Drive hoặc Dropbox",
    time: "< 2 phút",
    color: "bg-purple-100",
  },
  {
    icon: "🔗",
    title: "Chia Sẻ Link",
    description: "Tạo link chia sẻ với bạn bè, gia đình",
    time: "< 10 giây",
    color: "bg-yellow-100",
  },
] as const;

export const PDF_STATISTICS = [
  {
    number: "119+",
    label: "Chủ Đề Ngữ Pháp",
    description: "Từ cơ bản đến nâng cao",
  },
  {
    number: "10,000+",
    label: "Lượt Tải Mỗi Tháng",
    description: "Được tin dùng bởi cộng đồng",
  },
  {
    number: "99.9%",
    label: "Độ Chính Xác",
    description: "Nội dung được kiểm duyệt kỹ lưỡng",
  },
  {
    number: "24/7",
    label: "Hỗ Trợ Tải",
    description: "Sẵn sàng mọi lúc mọi nơi",
  },
] as const;

export const FAQ_DATA = [
  {
    question: "PDF có miễn phí không?",
    answer:
      "Hoàn toàn miễn phí! Bạn có thể tải bất kỳ PDF nào mà không cần đăng ký hay thanh toán.",
  },
  {
    question: "Chất lượng PDF như thế nào?",
    answer:
      "PDF chất lượng cao với font rõ nét, layout chuyên nghiệp, phù hợp cho cả đọc màn hình và in ấn.",
  },
  {
    question: "Có thể tải về bao nhiều lần?",
    answer:
      "Không giới hạn số lần tải. Bạn có thể tải lại bất cứ khi nào cần thiết.",
  },
  {
    question: "PDF có cập nhật không?",
    answer:
      "Chúng tôi thường xuyên cập nhật nội dung. PDF mới sẽ có version và ngày cập nhật rõ ràng.",
  },
] as const;
