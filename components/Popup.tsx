"use client";

import { useState, useEffect } from 'react';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV25e8D1ZHGcdT401gG33vbWwO82DBS7PklqpkQtIjIx5APgpxTaxz-hCHquUmjhE/exec';

    try {
      await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
      setShowSuccess(true);
      form.reset();
      setTimeout(() => handleClose(), 2000);
    } catch (error) {
      console.error('Lỗi!', error);
      alert('Có lỗi kết nối!');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Nền đen mờ */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Nội dung Popup Dark Mode */}
      <div className="relative bg-[#111] border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-[fade-in-up_0.5s_ease-out]">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {!showSuccess ? (
          <>
            <div className="text-center mb-6">
              <span className="bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-purple/20">
                Ưu đãi Demo
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">Trải nghiệm BizGenie</h3>
              <p className="text-gray-400 text-sm mt-2">
                Để lại email để nhận tài khoản Demo dùng thử miễn phí ngay lập tức.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="Họ và tên" type="text" required className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:border-brand-orange focus:outline-none text-sm placeholder-gray-600" placeholder="Họ tên" />
              <input name="Email" type="email" required className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:border-brand-orange focus:outline-none text-sm placeholder-gray-600" placeholder="Email công việc" />
              <input name="Số điện thoại" type="tel" required className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:border-brand-orange focus:outline-none text-sm placeholder-gray-600" placeholder="Số điện thoại" />
              <input type="hidden" name="Nội dung yêu cầu" value="Đăng ký từ POPUP" />

              <button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300">
                {isSubmitting ? 'Đang gửi...' : 'Nhận Tư Vấn Miễn Phí'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
              <i className="fas fa-check text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">Thành công!</h3>
            <p className="text-gray-400 mt-2">Chúng tôi sẽ liên hệ sớm.</p>
          </div>
        )}
      </div>
    </div>
  );
}