import React from 'react';

// Component con để tạo hiệu ứng viền chạy
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative group rounded-3xl overflow-hidden ${className}`}>
      
      {/* 1. LỚP VIỀN GRADIENT CHẠY (Ẩn đi, hiện khi hover) */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-orange to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow"></div>
      
      {/* 2. LỚP NỀN ĐEN (Đè lên trên, chừa 1.5px để lộ viền) */}
      <div className="absolute inset-[1.5px] bg-[#0a0a0a] rounded-[22px] z-10"></div>

      {/* 3. NỘI DUNG (Nằm trên cùng) */}
      <div className="relative z-20 h-full">
        {children}
      </div>
      
      {/* Hiệu ứng Glow tĩnh mờ mờ khi hover */}
      <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 pointer-events-none z-10 transition duration-500"></div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black relative scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* Tiêu đề */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sức mạnh của <span className="text-brand-purple">AI Deep Learning</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Không chỉ là OCR, chúng tôi hiểu ngữ cảnh tài liệu. Xử lý hàng nghìn trang tài liệu mỗi phút với cấu trúc Bento hiện đại.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Ô 1: To nhất (Trí tuệ nhân tạo) */}
          <BentoCard className="md:col-span-2">
            <div className="p-10 h-full flex flex-col relative overflow-hidden">
               {/* Background Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px]"></div>
               
               <i className="fas fa-brain text-5xl text-brand-purple mb-6"></i>
               <h3 className="text-3xl font-bold text-white mb-4">Trí tuệ nhân tạo (AI) tự học</h3>
               <p className="text-gray-400 text-lg mb-6">
                 Hệ thống tự động học hỏi từ dữ liệu mới. Càng sử dụng, AI càng thông minh và nhận diện chính xác hơn.
               </p>
               
               {/* Code minh họa */}
               <div className="mt-auto p-4 bg-black/60 rounded-xl border border-white/5 font-mono text-xs text-green-400 backdrop-blur-sm">
                 <p>{`> analyzing_doc_v2.pdf ... 100%`}</p>
                 <p>{`> extracting_fields ... done`}</p>
                 <p>{`> confidence_score: 0.998`}</p>
               </div>
            </div>
          </BentoCard>

          {/* Ô 2: Tốc độ xử lý */}
          <BentoCard className="md:col-span-1">
             <div className="p-8 h-full flex flex-col">
                <i className="fas fa-bolt text-4xl text-brand-orange mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-2">Tốc độ xử lý</h3>
                <p className="text-gray-400">Dưới 1 giây cho mỗi trang tài liệu A4.</p>
                
                <div className="mt-auto">
                   <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-orange w-[95%] animate-pulse shadow-[0_0_10px_orange]"></div>
                   </div>
                   <p className="text-right text-xs text-brand-orange mt-2">950 trang/phút</p>
                </div>
             </div>
          </BentoCard>

          {/* Ô 3: Bảo mật */}
          <BentoCard>
            <div className="p-8 h-full flex flex-col">
               <i className="fas fa-shield-alt text-4xl text-blue-400 mb-6"></i>
               <h3 className="text-xl font-bold text-white mb-2">Bảo mật On-premise</h3>
               <p className="text-gray-400 text-sm">Dữ liệu không bao giờ rời khỏi máy chủ của bạn.</p>
            </div>
          </BentoCard>

          {/* Ô 4: Xuất file */}
          <BentoCard className="md:col-span-2">
            <div className="p-8 h-full flex items-center justify-between relative overflow-hidden">
               <div className="relative z-10 max-w-lg">
                 <i className="fas fa-file-excel text-4xl text-green-500 mb-6"></i>
                 <h3 className="text-2xl font-bold text-white mb-2">Xuất file đa định dạng</h3>
                 <p className="text-gray-400">JSON, XML, CSV, Excel, hoặc đẩy trực tiếp vào API hệ thống.</p>
               </div>
               {/* Icon trang trí chìm */}
               <i className="fas fa-database text-[180px] text-white/5 absolute -right-10 -bottom-10 rotate-12"></i>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default Features;