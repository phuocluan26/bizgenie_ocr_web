"use client";

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// Component thẻ Magic: Glassmorphism khi nghỉ -> Magic Border khi hover
const MagicCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    // Wrapper ngoài cùng: Xử lý Grid Span và hiệu ứng nổi lên (Float)
    <div className={`group relative h-full transition-transform duration-500 hover:-translate-y-3 ${className}`}>
      
      {/* Container tạo viền: overflow-hidden để cắt phần dư của gradient xoay */}
      <div className="relative h-full overflow-hidden rounded-3xl p-[2px]">
        
        {/* Lớp Gradient xoay (Ẩn khi nghỉ, Hiện khi hover) */}
        <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8B5CF6_25%,#FF7F00_50%,#8B5CF6_75%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Nội dung chính */}
        <div className="relative h-full rounded-[22px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 group-hover:bg-[#0a0a0a] group-hover:border-transparent transition-all duration-300">
          {children}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-transparent relative scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* Tiêu đề */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sức mạnh của <span className="text-brand-purple">AI Deep Learning</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Không chỉ là OCR, chúng tôi hiểu ngữ cảnh tài liệu. Xử lý hàng nghìn trang tài liệu mỗi phút với cấu trúc Bento hiện đại.
            </p>
          </div>
        </ScrollReveal>

        {/* BENTO GRID LAYOUT */}
        {/* SỬA 1: Tăng chiều cao hàng từ 300px lên 320px để các ô thoáng hơn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Ô 1: To nhất (Trí tuệ nhân tạo) */}
          <div className="md:col-span-2 h-full">
            <ScrollReveal className="h-full">
              <MagicCard className="h-full">
                {/* SỬA 2: Giảm padding từ p-10 xuống p-8 để có thêm đất diễn cho nội dung */}
                <div className="p-8 h-full flex flex-col relative overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px]"></div>
                  
                  {/* SỬA 3: Giảm margin-bottom của icon và tiêu đề để code block không bị đẩy quá sâu */}
                  <i className="fas fa-brain text-5xl text-brand-purple mb-4"></i>
                  <h3 className="text-3xl font-bold text-white mb-2">Trí tuệ nhân tạo (AI) tự học</h3>
                  <p className="text-gray-400 text-lg mb-4">
                    Hệ thống tự động học hỏi từ dữ liệu mới. Càng sử dụng, AI càng thông minh và nhận diện chính xác hơn.
                  </p>
                  
                  {/* Code minh họa */}
                  <div className="mt-auto p-4 bg-black/60 rounded-xl border border-white/5 font-mono text-xs text-green-400 backdrop-blur-sm">
                    <p>{`> analyzing_doc_v2.pdf ... 100%`}</p>
                    <p>{`> extracting_fields ... done`}</p>
                    <p>{`> confidence_score: 0.998`}</p>
                  </div>
                </div>
              </MagicCard>
            </ScrollReveal>
          </div>

          {/* Ô 2: Tốc độ xử lý */}
          <div className="md:col-span-1 h-full">
            <ScrollReveal delay={0.1} className="h-full">
              <MagicCard className="h-full">
                <div className="p-8 h-full flex flex-col">
                    <i className="fas fa-bolt text-4xl text-brand-orange mb-6"></i>
                    <h3 className="text-xl font-bold text-white mb-2">Tốc độ xử lý</h3>
                    <p className="text-gray-400">Dưới 1 giây cho mỗi trang tài liệu A4.</p>
                    
                    <div className="mt-auto">
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-orange w-[95%] animate-pulse shadow-[0_0_10px_orange]"></div>
                      </div>
                      <p className="text-right text-xs text-brand-orange mt-2">950 trang/phút</p>
                    </div>
                </div>
              </MagicCard>
            </ScrollReveal>
          </div>

          {/* Ô 3: Bảo mật */}
          <div className="md:col-span-1 h-full">
            <ScrollReveal delay={0.2} className="h-full">
              <MagicCard className="h-full">
                <div className="p-8 h-full flex flex-col">
                  <i className="fas fa-shield-alt text-4xl text-blue-400 mb-6"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Bảo mật On-premise</h3>
                  <p className="text-gray-400 text-sm">Dữ liệu không bao giờ rời khỏi máy chủ của bạn.</p>
                </div>
              </MagicCard>
            </ScrollReveal>
          </div>

          {/* Ô 4: Xuất file */}
          <div className="md:col-span-2 h-full">
            <ScrollReveal delay={0.3} className="h-full">
              <MagicCard className="h-full">
                <div className="p-8 h-full flex flex-col relative overflow-hidden">
                  <div className="relative z-10 w-full"> 
                    <i className="fas fa-file-excel text-4xl text-green-500 mb-6"></i>
                    <h3 className="text-2xl font-bold text-white mb-2">Xuất file đa định dạng</h3>
                    <p className="text-gray-400 pr-0 md:pr-20">JSON, XML, CSV, Excel, hoặc đẩy trực tiếp vào API hệ thống.</p>
                  </div>
                  {/* Icon trang trí chìm */}
                  <i className="fas fa-database text-[180px] text-white/5 absolute -right-10 -bottom-10 rotate-12"></i>
                </div>
              </MagicCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;