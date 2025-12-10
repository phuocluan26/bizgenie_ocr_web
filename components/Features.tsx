"use client";

import React, { useRef, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

// Component thẻ có hiệu ứng Spotlight theo chuột
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden ${className}`}
    >
      {/* Lớp ánh sáng Spotlight di chuyển theo chuột */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Nội dung */}
      <div className="relative z-20 h-full">{children}</div>
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
              Không chỉ là OCR, chúng tôi hiểu ngữ cảnh tài liệu. Tự động phân trường cần thiết theo loại từng giấy tờ. Xử lý hàng ngàn tài liệu nhờ hàng đợi mà không cần phải trực tiếp canh thời gian.
            </p>
          </div>
        </ScrollReveal>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Ô 1: To nhất (Trí tuệ nhân tạo) */}
          <div className="md:col-span-2 h-full">
            <ScrollReveal className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-10 h-full flex flex-col relative overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px]"></div>
                  
                  <i className="fas fa-brain text-5xl text-brand-purple mb-6"></i>
                  <h3 className="text-3xl font-bold text-white mb-4">Trí tuệ nhân tạo (AI) tự học</h3>
                  <p className="text-gray-400 text-lg mb-6">
                    Hệ thống tự động học hỏi từ dữ liệu mới. Càng sử dụng, AI càng thông minh và nhận diện chính xác hơn.
                  </p>
                  
                  {/* Code minh họa */}
                  <div className="mt-auto p-4 bg-black/60 rounded-xl border border-white/5 font-mono text-xs text-green-400 backdrop-blur-sm">
                    <p>{`> analyzing_doc_v2.pdf ... 100%`}</p>
                    <p>{`> extracting_fields ... done`}</p>
                    <p>{`> confidence_score: 0.998`}</p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Ô 2: Tốc độ xử lý */}
          <div className="md:col-span-1 h-full">
            <ScrollReveal delay={0.1} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-8 h-full flex flex-col">
                    <i className="fas fa-bolt text-4xl text-brand-orange mb-6"></i>
                    <h3 className="text-xl font-bold text-white mb-2">Tốc độ xử lý</h3>
                    <p className="text-gray-400">Phụ thuộc vào độ phức tạp của tài liệu.</p>
                    
                    <div className="mt-auto">
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-orange w-[95%] animate-pulse shadow-[0_0_10px_orange]"></div>
                      </div>
                      <p className="text-right text-xs text-brand-orange mt-2">Từ 30 giây - 2 phút</p>
                    </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Ô 3: Bảo mật */}
          <div className="md:col-span-1 h-full">
            <ScrollReveal delay={0.2} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-8 h-full flex flex-col">
                  <i className="fas fa-shield-alt text-4xl text-blue-400 mb-6"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Bảo mật On-premise</h3>
                  <p className="text-gray-400 text-sm">Dữ liệu không bao giờ rời khỏi máy chủ của bạn.</p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Ô 4: Xuất file */}
          <div className="md:col-span-2 h-full">
            <ScrollReveal delay={0.3} className="h-full">
              <SpotlightCard className="h-full">
                {/* SỬA Ở ĐÂY: Xóa 'items-center justify-between', thay bằng 'flex-col' */}
                <div className="p-8 h-full flex flex-col relative overflow-hidden">
                  <div className="relative z-10 max-w-lg">
                    <i className="fas fa-file-excel text-4xl text-green-500 mb-6"></i>
                    <h3 className="text-2xl font-bold text-white mb-2">Xuất file đa định dạng</h3>
                    <p className="text-gray-400">JSON, XML, CSV, Excel, hoặc đẩy trực tiếp vào API hệ thống.</p>
                  </div>
                  {/* Icon trang trí chìm */}
                  <i className="fas fa-database text-[180px] text-white/5 absolute -right-10 -bottom-10 rotate-12"></i>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;