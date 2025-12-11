"use client";

import { useState, useEffect } from 'react';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Hiện popup sau 0.8 giây (theo yêu cầu trước của bạn)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Reset lại trạng thái success sau khi đóng (để nếu hiện lại thì không bị hiện success luôn)
    setTimeout(() => setShowSuccess(false), 500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV25e8D1ZHGcdT401gG33vbWwO82DBS7PklqpkQtIjIx5APgpxTaxz-hCHquUmjhE/exec';

    // --- 1. GỬI NGẦM (Fire & Forget) ---
    // Gửi đi ngay lập tức và không chờ phản hồi để tránh delay
    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
      .catch(err => console.error("Lỗi gửi ngầm:", err));

    // --- 2. GIAO DIỆN LẠC QUAN (Optimistic UI) ---
    // Giả lập thời gian xử lý 1.5 giây (đủ để người dùng thấy nút loading)
    // Sau đó báo thành công ngay lập tức
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      form.reset();
      
      // Tự động đóng Popup sau 2 giây hiển thị thông báo thành công
      setTimeout(() => handleClose(), 2000);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* 1. Backdrop làm mờ & tối nền web */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500"
        onClick={handleClose}
      ></div>

      {/* 2. Wrapper chính chứa hiệu ứng Magic Border */}
      <div className="relative w-full max-w-lg group animate-[fade-in-up_0.5s_ease-out]">
        
        {/* --- HIỆU ỨNG VIỀN XOAY (MAGIC BORDER) --- */}
        <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8B5CF6_25%,#FF7F00_50%,#8B5CF6_75%,#000000_100%)] opacity-70" />
        </div>

        {/* --- NỘI DUNG POPUP --- */}
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-8">
          
          {/* Nút đóng */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition duration-300 z-20"
          >
            <i className="fas fa-times text-lg"></i>
          </button>

          {!showSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-8 relative">
                {/* Đốm sáng tím nhẹ sau tiêu đề */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-purple/20 blur-[40px] rounded-full pointer-events-none"></div>
                
                <span className="inline-block py-1 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-purple/20 to-brand-orange/20 border border-white/10 text-brand-light mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  ✨ Ưu đãi Demo
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Trải nghiệm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">BizGenie OCR</span>
                </h3>
                
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Nhập thông tin để nhận tài khoản dùng thử <b>Premium</b> ngay lập tức.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="group">
                  <input 
                    name="Họ và tên" 
                    type="text" 
                    required 
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all duration-300" 
                    placeholder="Họ tên của bạn" 
                  />
                </div>
                
                <div className="group">
                  <input 
                    name="Email" 
                    type="email" 
                    required 
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all duration-300" 
                    placeholder="Email công việc (name@company.com)" 
                  />
                </div>

                <div className="group">
                  <input 
                    name="Số điện thoại" 
                    type="tel" 
                    required 
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all duration-300" 
                    placeholder="Số điện thoại liên hệ" 
                  />
                </div>
                
                <input type="hidden" name="Nội dung yêu cầu" value="Đăng ký từ POPUP" />

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full mt-2 bg-gradient-to-r from-brand-orange to-red-500 hover:scale-[1.02] active:scale-[0.98] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,127,0,0.4)] hover:shadow-[0_0_30px_rgba(255,127,0,0.6)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-spinner fa-spin"></i> Đang xử lý...
                    </span>
                  ) : 'Nhận Tư Vấn Miễn Phí'}
                </button>
              </form>
            </>
          ) : (
            // Trạng thái thành công
            <div className="text-center py-10 animate-[fadeInUp_0.5s_ease-out]">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <i className="fas fa-check text-4xl text-green-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Đăng ký thành công!</h3>
              <p className="text-gray-400">Chuyên viên tư vấn sẽ liên hệ với bạn sau</p>
              <p className="text-gray-400">BizGenie xin cám ơn</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}