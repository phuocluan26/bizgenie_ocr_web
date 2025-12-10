"use client";

import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

export default function Home() {
  
  useEffect(() => {
    // --- 1. LOGIC CUỘN LÊN ĐẦU TRANG ---
    // Tắt tính năng tự nhớ vị trí của trình duyệt
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Ép cuộn lên đầu (tọa độ 0, 0)
    window.scrollTo(0, 0);


    // --- 2. LOGIC ANIMATION (Giữ nguyên) ---
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
      <Popup />
    </main>
  );
}