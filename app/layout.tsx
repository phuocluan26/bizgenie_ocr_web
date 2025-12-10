import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground"; // <--- Import vào đây

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bizgenie AI OCR - Smart Doc Digitize",
  description: "Giải pháp số hóa tài liệu thông minh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-gray-800 bg-transparent`}> 
        {/* Thêm bg-transparent vào body */}
        
        <StarBackground /> {/* <--- Đặt component nền ở đây */}
        
        <div className="relative z-10"> {/* Bọc nội dung chính để nó nổi lên trên sao */}
          {children}
        </div>
      </body>
    </html>
  );
}