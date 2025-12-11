import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-16 pb-8 font-sans overflow-hidden">
      
      {/* 1. ĐƯỜNG KẺ TRÊN CÙNG (Gradient Divider) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* 2. HIỆU ỨNG GLOW NỀN (Tím nhẹ ở giữa đáy) */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- PHẦN TRÊN: GRID 4 CỘT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* CỘT 1: THÔNG TIN CÔNG TY */}
          <div className="space-y-5">
            {/* Logo Text - Gradient */}
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange mb-1">
                BizGenie
              </h3>
              <p className="text-[10px] font-bold uppercase text-gray-500 tracking-[0.2em]">
                Smart Doc Digitize
              </p>
            </div>
            
            <p className="text-xs md:text-sm font-medium text-gray-400 leading-relaxed border-l-2 border-white/10 pl-3">
              CÔNG TY TNHH GIẢI PHÁP <br/> & CÔNG NGHỆ BIZGENIE
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3 group">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1 group-hover:text-white transition"></i>
                <span className="group-hover:text-gray-300 transition">Số 4 Phan Huy Ôn, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <i className="fas fa-envelope text-brand-orange group-hover:text-white transition"></i>
                <a href="mailto:contact@bizgenie.vn" className="group-hover:text-white transition decoration-brand-orange/50 hover:underline hover:decoration-brand-orange underline-offset-4">
                  contact@bizgenie.vn
                </a>
              </div>

              <div className="pl-7">
                <span className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-500 border border-white/5">MST: 0318961809</span>
              </div>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Liên kết nhanh
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Trang chủ</a></li>
              <li><a href="#features" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Tính năng nổi bật</a></li>
              <li><a href="#about" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Về chúng tôi</a></li>
              <li><a href="#contact" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Liên hệ & Báo giá</a></li>
            </ul>
          </div>

          {/* CỘT 3: PHÁP LÝ */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
              Pháp lý
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-brand-light hover:pl-2 transition-all duration-300 block">Chính sách cookie</a></li>
            </ul>
          </div>

          {/* CỘT 4: MẠNG XÃ HỘI & CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Kết nối
            </h4>
            <div className="flex space-x-3 mb-6">
              {/* Các nút MXH giả lập */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-purple hover:text-white hover:border-brand-purple hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            
            <p className="text-xs text-gray-500 mb-2">Đăng ký nhận tin tức mới nhất:</p>
            <div className="relative">
              <input type="email" placeholder="Email của bạn" className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors" />
              <button className="absolute right-1 top-1 bottom-1 w-8 bg-brand-purple/20 text-brand-purple rounded-md hover:bg-brand-purple hover:text-white transition-colors flex items-center justify-center">
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>

        </div>

        {/* --- PHẦN DƯỚI: COPYRIGHT --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 text-center md:text-left">
            &copy; 2025 BIZGENIE TECH & SOLUTIONS COMPANY LTD. All rights reserved.
          </p>
          <div className="flex gap-4">
             {/* Icon thanh toán giả lập để tăng uy tín */}
             <div className="h-6 w-10 bg-white/5 rounded flex items-center justify-center text-gray-600 text-[10px]"><i className="fab fa-cc-visa text-lg"></i></div>
             <div className="h-6 w-10 bg-white/5 rounded flex items-center justify-center text-gray-600 text-[10px]"><i className="fab fa-cc-mastercard text-lg"></i></div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}