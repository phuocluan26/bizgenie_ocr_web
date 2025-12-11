"use client";

import React from 'react';
import Typewriter from 'typewriter-effect'; 
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const Hero = () => {
  return (
    // SỬA: overflow-hidden trên mobile để tránh vỡ layout khi chữ quá dài, md:overflow-visible để giữ hiệu ứng glow trên desktop
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden md:overflow-visible">
      
      {/* Đốm sáng tím */}
      <motion.div 
        animate={{ 
          x: [0, 30, -20, 0], 
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="purple-glow top-[-10%] left-[10%]"
      ></motion.div>

      {/* Đốm sáng cam */}
      <motion.div 
        animate={{ 
          x: [0, -40, 20, 0], 
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="purple-glow bottom-[-10%] right-[-5%] bg-brand-orange/20 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px]"
      ></motion.div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Nội dung bên trái */}
        <ScrollReveal>
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            
            {/* Badge nhỏ */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-brand-light backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Giải Pháp Số Hóa Tài Liệu 4.0
            </div>

            {/* Tiêu đề chính */}
            {/* SỬA: Giảm font size mobile xuống text-3xl để tránh tràn màn hình */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
              <span className="animate-text-shimmer">Bizgenie AI OCR</span> <br />
              
              {/* SỬA: Tăng chiều cao block chứa text chạy (min-h) để nếu chữ rớt dòng cũng không đẩy layout */}
              <span className="block mt-2 min-h-[1.5em] md:min-h-[1.2em]"> 
                <Typewriter
                  options={{
                    strings: ['Xử Lý Hóa Đơn', 'Trích Xuất Hợp Đồng', 'Số Hóa CCCD'],
                    autoStart: true,
                    loop: true,
                    delay: 50, // Tăng tốc độ gõ một chút cho mượt
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </h1>

            <p className="text-sm md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              Biến tài liệu giấy thành dữ liệu số chỉ trong 1 giây. Độ chính xác 95%. 
              Tích hợp API mượt mà vào hệ thống ERP/CRM của bạn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-orange to-red-500 text-white rounded-lg font-bold shadow-[0_0_20px_rgba(255,140,0,0.5)] hover:shadow-[0_0_30px_rgba(255,140,0,0.7)] transition transform hover:-translate-y-1 text-center">
                Dùng Thử Miễn Phí
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Video Demo */}
        <ScrollReveal delay={0.2}>
          <div className="relative group mt-8 md:mt-0">
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
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;