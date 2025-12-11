"use client";

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// Component thẻ Magic: Glassmorphism khi nghỉ -> Magic Border khi hover
const MagicCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    // 1. Wrapper ngoài cùng: Hiệu ứng nổi lên (Float)
    <div className={`group relative h-full transition-transform duration-500 hover:-translate-y-3 ${className}`}>
      
      {/* 2. Container tạo viền: overflow-hidden để cắt phần dư của gradient xoay */}
      <div className="relative h-full overflow-hidden rounded-3xl p-[2px]">
        
        {/* 3. Lớp Gradient xoay (Ẩn khi nghỉ, Hiện khi hover) */}
        {/* Nằm dưới cùng, đóng vai trò tạo viền màu khi hover */}
        <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8B5CF6_25%,#FF7F00_50%,#8B5CF6_75%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* 4. Nội dung chính */}
        {/* - Khi nghỉ (Mặc định): bg-gradient-to-br from-white/10 to-white/5 (Kính trong suốt) + border-white/10
           - Khi hover (group-hover): bg-[#0a0a0a] (Nền đen đặc để che phần giữa của gradient xoay, chỉ lộ ra viền) + border-transparent
        */}
        <div className="relative h-full rounded-[22px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 group-hover:bg-[#0a0a0a] group-hover:border-transparent transition-all duration-300 p-8 flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-visible">
      {/* Hiệu ứng nền mờ (Glow) vẫn giữ nguyên để tôn lên chất kính */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-light text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(167,139,250,0.3)]">
              Về Chúng Tôi
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Không chỉ là OCR, đó là <span className="animate-text-shimmer">BizGenie</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              BizGenie được ví như &quot;thần đèn&quot; của doanh nghiệp — giải quyết các bài toán dữ liệu hóc búa nhất chỉ trong tích tắc. Chúng tôi biến hàng núi giấy tờ hỗn độn thành dữ liệu sạch, có cấu trúc để bạn ra quyết định kinh doanh chính xác.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Grid Số Liệu - Sử dụng MagicCard mới */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ScrollReveal delay={0.1}>
            <MagicCard>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform duration-500">95%</div>
              <div className="text-sm font-semibold text-brand-purple uppercase tracking-widest mb-2">Độ Chính Xác Chữ In</div>
              <p className="text-xs text-gray-400 text-center">Vượt trội so với nhập liệu thủ công</p>
            </MagicCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MagicCard>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform duration-500">85%</div>
              <div className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-2">Độ Chính Xác Chữ Viết Tay</div>
              <p className="text-xs text-gray-400 text-center">Xử lý tốt cả chữ viết khó đọc</p>
            </MagicCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MagicCard>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform duration-500">24/7</div>
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">AI Chatbot Hỗ Trợ</div>
              <p className="text-xs text-gray-400 text-center">Hệ thống tìm kiếm thông minh và trả lời dựa trên nội dung thực tế.</p>
            </MagicCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}