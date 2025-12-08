import React from 'react';
import './Intro.css';

const Philosophy = () => {
  return (
    <div className="subpage-content-inner">
      <section className="philosophy-intro">
        <h2>진료 철학</h2>
        <p>닥터모리모리가 지키는 3가지 약속</p>
      </section>

      <div className="philosophy-details">
        <div className="detail-item">
          <div className="detail-header">
            <span className="detail-num">01</span>
            <h3>Trust (신뢰)</h3>
          </div>
          <p>
            환자분과의 신뢰를 최우선으로 생각합니다.<br />
            불필요한 시술을 권하지 않으며, 의학적으로 검증된 치료만을 시행합니다.
            모든 진료 과정은 투명하게 공개하며, 환자분이 납득할 수 있는 정직한 진료를 약속합니다.
          </p>
        </div>

        <div className="detail-item">
          <div className="detail-header">
            <span className="detail-num">02</span>
            <h3>Hope (희망)</h3>
          </div>
          <p>
            탈모는 불치병이 아닙니다.<br />
            정확한 원인 파악과 맞춤형 치료를 통해 충분히 개선될 수 있습니다.
            저희는 환자분들께 '나아질 수 있다'는 확실한 희망을 드리고, 그 희망을 현실로 만들어 드립니다.
          </p>
        </div>

        <div className="detail-item">
          <div className="detail-header">
            <span className="detail-num">03</span>
            <h3>Care (케어)</h3>
          </div>
          <p>
            치료의 시작부터 끝까지, 그리고 그 이후까지 함께합니다.<br />
            단순한 시술을 넘어, 생활 습관 교정과 심리적인 안정까지 고려한 토탈 케어를 제공합니다.
            편안하고 아늑한 공간에서 최상의 서비스를 경험해 보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
