"use client";

import { motion } from "framer-motion";
import React from "react";

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
  return (
    <motion.div
      // Trạng thái ban đầu (khi chưa cuộn tới hoặc đã cuộn qua)
      initial="hidden"
      // Trạng thái khi lọt vào khung hình
      whileInView="visible"
      // once: false => Cho phép lặp lại hiệu ứng mỗi khi vào viewport
      // margin: "-50px" => Thụt lùi điểm kích hoạt 50px để người dùng thấy rõ hiệu ứng
      viewport={{ once: false, margin: "-50px" }}
      
      variants={{
        hidden: { opacity: 0, y: 40 }, // Lúc ẩn: mờ và tụt xuống 40px
        visible: { opacity: 1, y: 0 }  // Lúc hiện: rõ và về vị trí gốc
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