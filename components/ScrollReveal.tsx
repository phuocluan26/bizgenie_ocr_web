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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kiểm tra kích thước màn hình sau khi render client-side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Chạy ngay lần đầu
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Nếu là mobile: Render thẻ div thường (không animation) -> Cực nhẹ
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Nếu là desktop: Render motion.div với hiệu ứng như cũ
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Tối ưu: chỉ chạy 1 lần rồi thôi
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