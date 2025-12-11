# BizGenie AI OCR - Smart Doc Digitize Landing Page

![BizGenie Banner](public/image/banner.jpg)

## 📖 Giới thiệu (Introduction)

Đây là Landing Page chính thức cho giải pháp **BizGenie AI OCR** - Hệ thống số hóa tài liệu thông minh sử dụng công nghệ AI Deep Learning. Website được thiết kế với phong cách hiện đại (Cyber/Tech), tối ưu hóa trải nghiệm người dùng (UX) và hiệu năng cao.

🔗 **Demo:** [https://bizgenie-sdd.vercel.app](https://bizgenie-sdd.vercel.app)

## ✨ Tính năng nổi bật (Key Features)

* **Giao diện Cyber/Tech:** Sử dụng hiệu ứng Neon Glow, Glassmorphism (kính mờ) và Starfield background tạo cảm giác công nghệ cao.
* **Responsive Design:** Tương thích hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
* **Hiệu ứng mượt mà:**
    * **Scroll Reveal:** Các phần tử xuất hiện nhẹ nhàng khi cuộn trang.
    * **Magic Border:** Hiệu ứng viền gradient xoay tròn cho các thẻ (Cards) và Popup.
    * **Typewriter Effect:** Hiệu ứng gõ chữ tự động ở phần Hero.
* **Optimistic UI (Giao diện lạc quan):**
    * Hệ thống Form liên hệ và Popup đăng ký phản hồi tức thì ("Gửi thành công") để tăng trải nghiệm người dùng, trong khi vẫn xử lý dữ liệu ngầm bên dưới.
* **Components:**
    * **Navbar:** Menu điều hướng thông minh, tự động thu gọn/mở rộng và thay đổi giao diện khi cuộn.
    * **Popup:** Tự động hiển thị chào mời đăng ký Demo, tích hợp logic chống làm phiền (session based).
    * **Bento Grid Layout:** Phần "Tính năng" được bố trí dạng lưới hiện đại, dễ theo dõi.

## 🛠️ Công nghệ sử dụng (Tech Stack)

* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
* **Ngôn ngữ:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** FontAwesome (CDN)
* **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Hướng dẫn cài đặt (Getting Started)

Để chạy dự án này trên máy cá nhân (Localhost):

1.  **Clone repository:**
    ```bash
    git clone [https://github.com/phuocluan26/bizgenie_ocr_web.git](https://github.com/phuocluan26/bizgenie_ocr_web.git)
    cd bizgenie_ocr_web
    ```

2.  **Cài đặt các gói phụ thuộc (Dependencies):**
    ```bash
    npm install
    # hoặc
    yarn install
    ```

3.  **Chạy server phát triển (Development Server):**
    ```bash
    npm run dev
    # hoặc
    yarn dev
    ```

4.  **Truy cập:**
    Mở trình duyệt và vào địa chỉ [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📂 Cấu trúc dự án (Project Structure)
bizgenie_ocr_web/
├── app/                    # Next.js App Router (Pages & Layouts)
│   ├── globals.css         # CSS toàn cục & cấu hình Tailwind
│   ├── layout.tsx          # Layout gốc (chứa StarBackground, Metadata)
│   └── page.tsx            # Trang chủ (Homepage - nơi ghép các components)
├── components/             # Các thành phần giao diện (UI Components)
│   ├── About.tsx           # Phần giới thiệu (Về chúng tôi)
│   ├── Contact.tsx         # Form liên hệ & Optimistic UI
│   ├── FAQ.tsx             # Câu hỏi thường gặp (Accordion)
│   ├── Features.tsx        # Các tính năng nổi bật (Bento Grid)
│   ├── Footer.tsx          # Chân trang (Thông tin & Liên kết)
│   ├── Hero.tsx            # Banner đầu trang (Typewriter & Glow)
│   ├── Navbar.tsx          # Thanh điều hướng (Responsive)
│   ├── Popup.tsx           # Popup đăng ký Demo (Session logic)
│   ├── ScrollReveal.tsx    # Wrapper xử lý hiệu ứng khi cuộn trang
│   └── StarBackground.tsx  # Hiệu ứng nền sao bay (Starfield)
├── public/                 # Tài nguyên tĩnh (Static Assets)
│   └── image/
│       └── favicon.ico     # Icon hiển thị trên tab trình duyệt
├── .gitignore              # Cấu hình file/folder cần bỏ qua khi git push
├── eslint.config.mjs       # Cấu hình kiểm tra lỗi code (Linting)
├── next-env.d.ts           # Typescript declaration cho Next.js
├── next.config.ts          # Cấu hình Next.js
├── package.json            # Khai báo thư viện & lệnh chạy (scripts)
├── package-lock.json       # Phiên bản chi tiết của các thư viện
├── postcss.config.mjs      # Cấu hình PostCSS (cho Tailwind)
├── README.md               # Tài liệu hướng dẫn dự án
├── tailwind.config.ts      # Cấu hình Tailwind CSS (Màu sắc, Animation...)
├── tsconfig.json           # Cấu hình TypeScript
└── types.d.ts              # Định nghĩa Type bổ sung (nếu có)
## 🚢 Triển khai (Deployment)

Cách đơn giản nhất để deploy dự án Next.js này là sử dụng nền tảng **Vercel**:

1.  Push code lên GitHub.
2.  Truy cập Vercel và Import dự án từ GitHub.
3.  Vercel sẽ tự động phát hiện Next.js và tiến hành Build.
4.  Website sẽ hoạt động ngay lập tức sau khi build xong.

## 📄 License

Project này thuộc bản quyền của **CÔNG TY TNHH GIẢI PHÁP & CÔNG NGHỆ BIZGENIE**.

---
*Developed by Phuoc Luan.*