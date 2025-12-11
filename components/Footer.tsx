import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 py-8 md:py-12 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6">
        
        {/* --- PHẦN TRÊN: GRID 4 CỘT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* CỘT 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-orange mb-2" style={{ textShadow: '0 0 15px rgba(255, 140, 0, 0.4)' }}>
              BizGenie
            </h3>
            
            <p className="text-xs md:text-sm font-bold uppercase text-gray-400 leading-relaxed">
              CÔNG TY TNHH GIẢI PHÁP & CÔNG NGHỆ BIZGENIE
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1"></i>
                <span>Số 4 Phan Huy Ôn, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-brand-orange"></i>
                <a href="mailto:contact@bizgenie.vn" className="hover:text-white transition">
                  contact@bizgenie.vn
                </a>
              </div>

              <div className="pl-7">
                <span className="block">MST: 0318961809</span>
              </div>
            </div>
          </div>

          {/* CỘT 2 */}
          <div>
            <h4 className="text-brand-orange font-bold mb-4 md:mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white inline-block">Trang chủ</a></li>
              <li><a href="#features" className="hover:text-white inline-block">Bảng giá</a></li>
              <li><a href="#contact" className="hover:text-white inline-block">Liên hệ</a></li>
            </ul>
          </div>

          {/* CỘT 3 */}
          <div>
            <h4 className="text-brand-orange font-bold mb-4 md:mb-6">Pháp lý</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white inline-block">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white inline-block">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white inline-block">Chính sách cookie</a></li>
            </ul>
          </div>

          {/* CỘT 4 */}
          <div>
            <h4 className="text-brand-orange font-bold mb-4 md:mb-6">Theo dõi chúng tôi</h4>
            <p className="text-sm text-gray-400 mb-4">
              Chưa có liên kết mạng xã hội
            </p>
          </div>

        </div>

        {/* --- PHẦN DƯỚI: COPYRIGHT --- */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 CÔNG TY TNHH GIẢI PHÁP & CÔNG NGHỆ BIZGENIE. Tất cả quyền được bảo lưu.
          </p>
        </div>
        
      </div>
    </footer>
  );
}