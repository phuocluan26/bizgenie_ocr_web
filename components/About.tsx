"use client";

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      {/* Hiệu ứng nền mờ */}
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
        
        {/* Grid Số Liệu - Dark Mode Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/50 transition duration-300 text-center group h-full">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-sm font-semibold text-brand-purple uppercase tracking-widest">Độ Chính Xác Chữ In</div>
              <p className="text-xs text-gray-500 mt-2">Vượt trội so với nhập liệu thủ công</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/50 transition duration-300 text-center group h-full">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform">85%</div>
              <div className="text-sm font-semibold text-brand-orange uppercase tracking-widest">Độ Chính Xác Chữ Viết Tay</div>
              <p className="text-xs text-gray-500 mt-2">Xử lý tốt cả chữ viết khó đọc</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition duration-300 text-center group h-full">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">AI Chatbot Hỗ Trợ</div>
              <p className="text-xs text-gray-500 mt-2">Hệ thống tìm kiếm thông minh và trả lời dựa trên nội dung thực tế.</p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}