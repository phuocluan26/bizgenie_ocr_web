"use client";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "Bizgenie OCR có xử lý được chữ viết tay tiếng Việt không?",
    answer: "Có. Hệ thống AI Deep Learning của chúng tôi được huấn luyện đặc biệt trên bộ dữ liệu tiếng Việt, cho khả năng nhận diện chữ viết tay chính xác tới 85%, xử lý tốt các mẫu đơn, phiếu khảo sát viết tay."
  },
  {
    question: "Tôi có cần đầu tư máy chủ (Server) riêng không?",
    answer: "Không bắt buộc. Bạn có thể dùng bản Cloud (SaaS) để tiết kiệm chi phí ban đầu. Tuy nhiên, nếu bạn là Ngân hàng hoặc Chính phủ cần bảo mật cao, chúng tôi cung cấp bản On-Premise cài đặt trực tiếp lên máy chủ của bạn."
  },
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer: "Tuyệt đối an toàn. Mọi dữ liệu truyền tải đều được mã hóa chuẩn SSL/TLS. Với phiên bản On-premise, dữ liệu hoàn toàn nằm trong mạng nội bộ của doanh nghiệp bạn, không ai (kể cả chúng tôi) có thể truy cập."
  },
  {
    question: "Chi phí được tính như thế nào?",
    answer: "Chúng tôi có các gói linh hoạt theo số lượng trang (Volume-based) hoặc gói thuê bao năm (Subscription). Hãy để lại thông tin để nhận báo giá chi tiết phù hợp với quy mô của bạn."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // SỬA: Thêm 'overflow-visible' để đồng bộ với Hero/About
    <section className="py-24 bg-transparent relative z-10 overflow-visible">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Câu Hỏi Thường Gặp
          </h2>
        </ScrollReveal>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                {/* WRAPPER CHÍNH */}
                <div className={`relative rounded-2xl transition-all duration-300 ${isOpen ? 'p-[2px]' : 'p-0'}`}>
                  
                  {/* --- LỚP 1: GRADIENT CHẠY --- */}
                  <div 
                    className={`absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8B5CF6_25%,#FF7F00_50%,#8B5CF6_75%,#000000_100%)]" />
                  </div>

                  {/* --- LỚP 2: NỘI DUNG CHÍNH --- */}
                  <div 
                    className={`
                      relative h-full rounded-[14px] overflow-hidden transition-all duration-300
                      ${isOpen 
                        ? 'bg-[#131313] border-transparent' 
                        : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10'
                      }
                    `}
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center p-6 text-left transition-colors"
                    >
                      <span className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-white/80 hover:text-white'}`}>
                        {faq.question}
                      </span>
                      
                      <span className={`
                        w-8 h-8 flex items-center justify-center rounded-full border 
                        transform transition-all duration-300 
                        ${isOpen 
                          ? 'rotate-180 bg-brand-purple text-white border-brand-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]' 
                          : 'border-white/10 bg-white/5 text-gray-400'
                        }
                      `}>
                        <i className="fas fa-chevron-down text-xs"></i>
                      </span>
                    </button>
                    
                    {/* Content */}
                    <div 
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}