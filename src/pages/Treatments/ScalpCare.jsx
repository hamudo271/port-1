import React from 'react';
import './Treatments.css';

const ScalpCare = () => {
  return (
    <div className="subpage-content-inner">
      <div className="treatment-header">
        <h2>두피 안티에이징</h2>
        <p>건강한 두피가 건강한 모발을 만듭니다.</p>
      </div>

      <div className="treatment-content">
        <div className="treatment-step">
          <h3>01. 두피 스케일링</h3>
          <p>두피의 노폐물과 각질을 제거하여 모공을 열어주고 두피 호흡을 돕습니다.</p>
        </div>
        <div className="treatment-step">
          <h3>02. 영양 공급</h3>
          <p>고농축 영양 앰플을 두피 깊숙이 침투시켜 모근을 강화합니다.</p>
        </div>
        <div className="treatment-step">
          <h3>03. 힐링 마사지</h3>
          <p>두피 근막을 이완시키고 혈액 순환을 도와 스트레스를 해소합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ScalpCare;
