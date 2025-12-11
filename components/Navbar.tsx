"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 w-full z-50 flex justify-center transition-all duration-300 ${scrolled ? 'top-2 md:top-4' : 'top-4 md:top-6'}`}>
      
      <nav className={`
        relative flex items-center justify-between 
        bg-[#050505]/30 backdrop-blur-xl border border-white/10 
        shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
        transition-all duration-300 ease-out
        ${scrolled 
          ? 'w-[95%] md:w-[95%] xl:w-[1100px] h-14 md:h-16 rounded-full px-3 md:px-6' 
          : 'w-[95%] md:w-[98%] xl:w-[1200px] h-16 md:h-20 rounded-full px-4 md:px-8'}
      `}>

        {/* --- KHỐI BÊN TRÁI: LOGO & TÊN CÔNG TY --- */}
        <a href="#" className="flex items-center h-full group gap-2 md:gap-4 max-w-[75%] md:max-w-none">
          {/* Logo */}
          <div className={`relative transition-all duration-300 ${scrolled ? 'h-8 md:h-9' : 'h-9 md:h-11'} w-auto flex-shrink-0`}>
            <Image 
              src="/image/favicon.ico" 
              alt="Bizgenie Logo" 
              width={140} 
              height={60} 
              className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
              priority
            />
          </div>

          {/* TÊN CÔNG TY*/}
          <div className="flex flex-col justify-center pl-2 md:pl-4 h-8 md:h-10 overflow-hidden">
            <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-brand-purple tracking-wider uppercase leading-tight whitespace-nowrap drop-shadow-md truncate">
              CÔNG TY TNHH GIẢI PHÁP
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-white/90 tracking-wider uppercase leading-tight whitespace-nowrap drop-shadow-md truncate">
              VÀ CÔNG NGHỆ BIZGENIE
            </span>
          </div>
        </a>

        {/* --- KHỐI GIỮA: MENU DESKTOP --- */}
        <div className="hidden lg:flex items-center space-x-1">
          {['Về Bizgenie', 'Tính Năng', 'Liên Hệ'].map((item, index) => {
            const hrefs = ['#about', '#features', '#contact'];
            return (
              <a 
                key={index}
                href={hrefs[index]} 
                className="group relative px-5 py-2"
              >
                <span className="relative z-10 text-sm font-bold text-white/80 transition-colors duration-300 group-hover:text-white">
                  {item}
                </span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-orange transition-all duration-300 ease-out group-hover:w-[80%] group-hover:shadow-[0_0_10px_rgba(255,140,0,0.8)]"></span>
                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
              </a>
            )
          })}
        </div>

        {/* --- KHỐI BÊN PHẢI: NÚT & HAMBURGER --- */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-brand-orange to-red-500 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition transform duration-200"
          >
            Demo Miễn Phí
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2 focus:outline-none transition-colors"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* --- MENU MOBILE (Dropdown) --- */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-3 w-full bg-[#111]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 flex flex-col gap-1 shadow-2xl animate-[fade-in-up_0.2s_ease-out] overflow-hidden z-50">
            <a href="#about" onClick={() => setIsOpen(false)} className="p-3 text-center text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition">Về Bizgenie</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="p-3 text-center text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition">Tính Năng</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="p-3 text-center text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition">Liên Hệ</a>
            <div className="h-[1px] bg-white/10 mx-2 my-1"></div>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="p-3 text-center text-sm font-bold text-brand-orange hover:bg-white/5 rounded-xl transition"
            >
              Đăng Ký Demo
            </a>
          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;