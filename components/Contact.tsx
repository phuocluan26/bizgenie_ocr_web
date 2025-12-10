"use client";

import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal'; // Import component hiệu ứng

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    const form = e.currentTarget;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV25e8D1ZHGcdT401gG33vbWwO82DBS7PklqpkQtIjIx5APgpxTaxz-hCHquUmjhE/exec';

    try {
      await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 8000);
    } catch (error) {
      console.error('Lỗi!', error);
      alert('Có lỗi kết nối, vui lòng thử lại sau!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center backdrop-blur-sm">
          
          {/* CỘT TRÁI: Thông tin (Xuất hiện trước) */}
          <ScrollReveal>
            <div>
              <div className="inline-block px-3 py-1 mb-4 border border-brand-purple/50 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
                Liên Hệ Ngay
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sẵn sàng chuyển đổi số?</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Đừng để giấy tờ kìm hãm tốc độ phát triển của bạn. Hãy để BizGenie giúp bạn tự động hóa quy trình ngay hôm nay.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition duration-300">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-bold">Hotline</p>
                     <p className="text-white font-semibold">032 8866 539</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition duration-300">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                     <p className="text-white font-semibold">contact@bizgenie.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* CỘT PHẢI: Form (Xuất hiện sau 0.2s) */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5 bg-black/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">Đăng ký tư vấn miễn phí</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-medium text-gray-400 mb-1">Họ và tên</label>
                  <input name="Họ và tên" type="text" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition" placeholder="Tên của bạn" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-medium text-gray-400 mb-1">Số điện thoại</label>
                  <input name="Số điện thoại" type="tel" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition" placeholder="09xx..." />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Email công việc</label>
                <input name="Email" type="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition" placeholder="name@company.com" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Nội dung yêu cầu</label>
                <textarea name="Nội dung yêu cầu" rows={3} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition" placeholder="Tôi quan tâm giải pháp..."></textarea>
              </div>

              {showSuccess && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm flex items-center">
                  <i className="fas fa-check-circle mr-2"></i> Gửi thành công! Chúng tôi sẽ liên hệ sớm.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold text-white transition duration-300 shadow-lg ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-brand-orange to-red-500 hover:shadow-orange-500/20 hover:scale-[1.02]'}`}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Ngay'}
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}