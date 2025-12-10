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
    // SỬA: Đã xóa 'border-t border-white/5' và đảm bảo bg-transparent
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Câu Hỏi Thường Gặp</h2>
        </ScrollReveal>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              {/* Thẻ con vẫn giữ viền nhẹ để phân tách nội dung, nhưng section bao ngoài thì không */}
              <div className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/30 bg-[#0a0a0a]/40 backdrop-blur-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition text-gray-200"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 text-brand-purple ${openIndex === index ? 'rotate-180' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 text-gray-400 border-t border-white/5 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}