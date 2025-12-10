"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // GIỮ NGUYÊN chiều cao h-20 (80px)
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 transition-all duration-300">
      
      {/* Container: Dùng h-full và flex items-center để căn giữa nội dung theo chiều dọc tuyệt đối */}
      <div className="container mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        
        {/* --- KHỐI BÊN TRÁI: LOGO & TÊN CÔNG TY --- */}
        <div className="flex items-center h-full">
          
          {/* 1. LOGO: Tăng kích thước */}
          {/* h-12 (48px) trên mobile, h-14 (56px) trên PC. Vẫn nằm gọn trong thanh Nav 80px */}
          <div className="relative h-12 w-auto md:h-14 flex-shrink-0">
            <Image 
              src="/image/favicon.ico" 
              alt="Bizgenie Logo" 
              width={180} 
              height={80} 
              className="h-full w-auto object-contain" 
              priority
            />
          </div>

          {/* 2. TÊN CÔNG TY: To hơn và căn giữa */}
          <div className="hidden lg:flex flex-col justify-center ml-4 pl-4 border-l border-gray-600 h-10">
            <span className="text-[11px] md:text-xs font-bold text-brand-purple tracking-wider uppercase leading-tight whitespace-nowrap">
              CÔNG TY TNHH GIẢI PHÁP
            </span>
            <span className="text-[11px] md:text-xs font-bold text-white tracking-wider uppercase leading-tight whitespace-nowrap">
              VÀ CÔNG NGHỆ BIZGENIE
            </span>
          </div>
        </div>

        {/* --- KHỐI GIỮA: MENU DESKTOP (Đã nâng cấp) --- */}
        <div className="hidden md:flex items-center space-x-10">
          {['Về Bizgenie', 'Tính Năng', 'Liên Hệ'].map((item, index) => {
            const hrefs = ['#about', '#features', '#contact'];
            return (
              <a 
                key={index}
                href={hrefs[index]} 
                // 1. Tăng kích thước chữ (text-base), in đậm (font-bold)
                // 2. Thêm class 'group' để điều khiển hiệu ứng con bên trong
                className="group relative text-base font-bold text-gray-400 transition-colors duration-300 hover:text-white py-2"
              >
                {/* Nội dung chữ */}
                {item}

                {/* --- HIỆU ỨNG MỚI: Gạch chân chạy từ giữa ra --- */}
                {/* Ban đầu w-0 (độ rộng bằng 0). Khi hover vào group thì w-full (rộng 100%) */}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-orange transition-all duration-300 ease-out group-hover:w-full group-hover:shadow-[0_0_10px_rgba(255,140,0,0.8)]"></span>
                
                {/* Hiệu ứng Glow nhẹ cho chữ khi hover */}
                <span className="absolute inset-0 blur-lg bg-white/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></span>
              </a>
            )
          })}
        </div>

        {/* --- KHỐI BÊN PHẢI: NÚT & HAMBURGER --- */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden lg:inline-flex items-center justify-center bg-gradient-to-r from-brand-orange to-red-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition transform duration-200"
          >
            Demo Miễn Phí
          </a>

          {/* Nút Hamburger cho Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE (Slide down) --- */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#111] border-t border-white/10 shadow-2xl animate-[fade-in-up_0.3s_ease-out]">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-purple py-2 border-b border-gray-800">Về Bizgenie</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-purple py-2 border-b border-gray-800">Tính Năng</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-purple py-2 border-b border-gray-800">Liên Hệ</a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-orange text-white text-center py-3 rounded-lg font-bold mt-2"
            >
              Demo Miễn Phí
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;