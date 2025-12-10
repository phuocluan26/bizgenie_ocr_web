import React from 'react';
import Typewriter from 'typewriter-effect'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      
      {/* 1. LỚP NỀN HỌA TIẾT */}
      <div className="absolute inset-0 bg-grid-white pointer-events-none"></div>
      
      {/* 2. ĐỐM SÁNG TÍM (Glow Effect) */}
      <div className="purple-glow top-[-20%] left-[20%] animate-pulse"></div>
      <div className="purple-glow bottom-[-20%] right-[-10%] bg-brand-orange/20 w-[500px] h-[500px]"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Nội dung bên trái */}
        <div className="space-y-8 fade-in-up">
          
          {/* Badge nhỏ */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-brand-light backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Giải Pháp Số Hóa Tài Liệu 4.0
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
            Bizgenie AI OCR <br />
            <span>
              <Typewriter
                options={{
                  strings: ['Xử Lý Hóa Đơn', 'Trích Xuất Hợp Đồng', 'Số Hóa CCCD'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Biến tài liệu giấy thành dữ liệu số chỉ trong 1 giây. Độ chính xác 95%. 
            Tích hợp API mượt mà vào hệ thống ERP/CRM của bạn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Nút chính: Màu cam rực rỡ */}
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-orange to-red-500 text-white rounded-lg font-bold shadow-[0_0_20px_rgba(255,140,0,0.5)] hover:shadow-[0_0_30px_rgba(255,140,0,0.7)] transition transform hover:-translate-y-1 text-center">
              Dùng Thử Miễn Phí
            </a>
          </div>
        </div>

        {/* Video Demo - Khung kính trong suốt */}
        <div className="relative fade-in-up delay-200 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-orange rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe 
              src="https://drive.google.com/file/d/16ida55ZlzlnM9cWlPIUkYzt3HN0KSmd4/preview"
              className="w-full aspect-video"
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Bizgenie Demo"
            >
            </iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;