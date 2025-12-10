import React from 'react';

const StarBackground = () => {
  return (
    <div className="stars-container">
      <div className="stars-1"></div>
      <div className="stars-2"></div>
      <div className="stars-3"></div>
      {/* Thêm một lớp gradient mờ để nền không bị đen tuyền nhàm chán */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-brand-orange/5 z-0"></div>
    </div>
  );
};

export default StarBackground;