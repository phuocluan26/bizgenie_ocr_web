"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  className = "" 
}: ScrollRevealProps) => {
  // Mặc định coi như là mobile/tablet để tránh flash hiệu ứng lúc mới load
  // (An toàn hơn cho trải nghiệm người dùng)
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // 1. Kiểm tra độ rộng màn hình
      const isSmallScreen = window.innerWidth < 1024;

      // 2. Kiểm tra khả năng Hover (Chuẩn nhất để phân biệt thiết bị chạm)
      // matchMedia('(hover: none)') trả về true nếu thiết bị KHÔNG dùng chuột (Touch screen)
      const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

      // Nếu màn hình nhỏ HOẶC là thiết bị cảm ứng -> Tắt Animation (isMobile = true)
      // Ngược lại -> Bật Animation (Desktop)
      if (isSmallScreen || isTouchDevice) {
        setShouldAnimate(false);
      } else {
        setShouldAnimate(true);
      }
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // --- LOGIC RENDER ---
  
  // Nếu KHÔNG cần animate (Mobile/Tablet) -> Render thẻ thường
  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  // Nếu CẦN animate (Desktop có chuột) -> Render motion
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Vẫn giữ once: true cho chắc chắn
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};