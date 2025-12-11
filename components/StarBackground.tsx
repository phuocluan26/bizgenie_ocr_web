"use client";

import React, { useRef, useEffect, useState } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number; // Độ trong suốt để tạo hiệu ứng lấp lánh
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const stars = useRef<Star[]>([]);

  // Khởi tạo Canvas
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }
  }, []);

  // Logic vẽ và animation
  useEffect(() => {
    if (!context || !canvasRef.current) return;

    let animationFrameId: number;
    const canvas = canvasRef.current;
    
    // Cấu hình số lượng sao tùy theo thiết bị
    // Mobile: 20 sao, Desktop: 70 sao
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 20 : 70;
    const speed = isMobile ? 0.07 : 0.2; // Tốc độ bay

    // Hàm tạo sao ngẫu nhiên
    const initStars = () => {
      stars.current = [];
      for (let i = 0; i < starCount; i++) {
        stars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5, // Kích thước sao
          vx: (Math.random() - 0.5) * speed, // Vận tốc ngang
          vy: (Math.random() - 0.5) * speed, // Vận tốc dọc
          alpha: Math.random(),
        });
      }
    };

    // Hàm vẽ
    const render = () => {
      // 1. Xóa khung hình cũ
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // 2. Vẽ từng ngôi sao
      stars.current.forEach((star) => {
        // Di chuyển
        star.x += star.vx;
        star.y += star.vy;

        // Nếu sao bay ra khỏi màn hình, đưa nó về phía đối diện (tạo vòng lặp vô tận)
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Hiệu ứng lấp lánh (thay đổi độ trong suốt)
        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 1) star.alpha = 1;

        // Vẽ
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        context.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Xử lý resize màn hình
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    handleResize(); // Chạy lần đầu
    render(); // Bắt đầu animation

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [context]);

  return (
    <div className="fixed inset-0 z-[-50] pointer-events-none bg-[#050505]">
      {/* Lớp gradient mờ nền giữ nguyên */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-brand-orange/5 z-0"></div>
      
      {/* Canvas vẽ sao */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default StarBackground;