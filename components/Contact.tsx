"use client";

import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    const form = e.currentTarget;
    // Tạo bản sao dữ liệu form để gửi đi
    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV25e8D1ZHGcdT401gG33vbWwO82DBS7PklqpkQtIjIx5APgpxTaxz-hCHquUmjhE/exec';

    // --- 1. GỬI NGẦM (Fire & Forget) ---
    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
      .catch(err => console.error("Lỗi gửi ngầm (không ảnh hưởng UX):", err));

    // --- 2. XỬ LÝ GIAO DIỆN LẠC QUAN (Optimistic UI) ---
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      form.reset();
      
      // Tắt thông báo thành công sau 8 giây
      setTimeout(() => setShowSuccess(false), 8000);
    }, 1500); 
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent relative overflow-visible border-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-x-1/2 w-[80vw] md:w-[600px] h-[80vw] md:h-[600px] bg-brand-orange/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] md:w-[400px] h-[60vw] md:h-[400px] bg-brand-purple/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- CỘT TRÁI: THÔNG TIN --- */}
          <ScrollReveal>
            <div>
              <div className="inline-block px-3 py-1 mb-4 border border-brand-purple/50 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Liên Hệ Ngay
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Sẵn sàng <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">chuyển đổi số?</span>
              </h2>
              <p className="text-gray-400 mb-8 md:mb-12 leading-relaxed text-sm md:text-lg">
                Đừng để giấy tờ kìm hãm tốc độ phát triển. Hãy để BizGenie giúp bạn tự động hóa quy trình xử lý dữ liệu ngay hôm nay.
              </p>
              
              <div className="space-y-6">
                {/* Info Card 1 */}
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-purple/30 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition duration-300">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Hotline Tư Vấn</p>
                     <p className="text-white font-bold text-lg">032 8866 539</p>
                  </div>
                </div>
                
                {/* Info Card 2 */}
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,127,0,0.5)] transition duration-300">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email Hỗ Trợ</p>
                     <p className="text-white font-bold text-lg">contact@bizgenie.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* --- CỘT PHẢI: FORM MAGIC --- */}
          <ScrollReveal delay={0.2}>
            <div className="relative group rounded-3xl">
              <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
                <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8B5CF6_25%,#FF7F00_50%,#8B5CF6_75%,#000000_100%)] opacity-70" />
              </div>

              <form onSubmit={handleSubmit} className="relative bg-[#0a0a0a] p-6 md:p-10 rounded-[22px] border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Đăng ký tư vấn miễn phí</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1 group">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Họ và tên</label>
                      <input name="Họ và tên" type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder-gray-600" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="col-span-2 md:col-span-1 group">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Số điện thoại</label>
                      <input name="Số điện thoại" type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder-gray-600" placeholder="09xx..." />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Email công việc</label>
                    <input name="Email" type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder-gray-600" placeholder="name@company.com" />
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nội dung yêu cầu</label>
                    <textarea name="Nội dung yêu cầu" rows={3} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-black focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none transition-all placeholder-gray-600" placeholder="Tôi quan tâm giải pháp..."></textarea>
                  </div>
                </div>

                {showSuccess && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm flex items-center justify-center animate-[fade-in-up_0.3s_ease-out]">
                    <i className="fas fa-check-circle mr-2"></i> Gửi thành công! Chúng tôi sẽ liên hệ sớm.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full mt-6 py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-brand-orange to-red-500 hover:shadow-[0_0_25px_rgba(255,127,0,0.5)] hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2"><i className="fas fa-spinner fa-spin"></i> Đang xử lý...</span>
                  ) : 'Gửi Yêu Cầu Ngay'}
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}