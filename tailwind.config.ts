import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Dự phòng nếu cấu trúc thư mục của bạn khác
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // CŨ: "#4A0080" (Quá tối)
          // MỚI: Tím Neon (Electric Violet) -> Sáng, nổi bật trên nền đen
          purple: "#8B5CF6",  
          
          // Màu tím nhạt (dùng cho text phụ hoặc hiệu ứng hover)
          light: "#C4B5FD",   
          
          // Màu cam giữ nguyên vì độ tương phản đã tốt
          orange: "#FF7F00",  
          
          // Nền đen sâu
          dark: "#050505",    
        },
      },
      animation: {
        'border-flow': 'border-flow 3s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        'border-flow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;