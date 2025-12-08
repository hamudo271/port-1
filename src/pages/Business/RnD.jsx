import React from 'react';
import './Business.css';

const RnD = () => {
  return (
    <div className="subpage-content-inner">
      <div className="business-header">
        <h2>재료/장비/제품 R&D</h2>
        <p className="business-intro">
          최상의 치료 결과를 위해 재료부터 장비, 홈케어 제품까지 직접 연구하고 개발합니다.
        </p>
      </div>

      <section className="business-section">
        <h3>재료 (Materials)</h3>
        <div className="rnd-item">
          <h4>미니쉬블록 (MINISH Block)</h4>
          <p>
            자연치아와 가장 유사한 물성을 가진 세라믹 재료입니다. 
            파절 강도, 마모도, 투명도 등이 자연치아와 99% 이상 일치하여, 
            치료 후 맞은편 치아에 손상을 주지 않고 오랫동안 건강하게 사용할 수 있습니다.
            독일 VITA사와 파트너십을 통해 2025년부터 2세대 블록을 공급받습니다.
          </p>
        </div>
      </section>

      <section className="business-section">
        <h3>장비 (Equipment)</h3>
        <div className="equipment-grid">
          <div className="equipment-card">
            <h4>미니쉬 로봇</h4>
            <p>초정밀 가공이 가능한 덴탈 밀링 머신. 15분 이내의 빠른 가공 속도와 뛰어난 적합도를 자랑합니다.</p>
          </div>
          <div className="equipment-card">
            <h4>미니쉬 광중합기</h4>
            <p>완벽한 접착을 위한 맞춤 설계. Soft curing 기술로 수축을 최소화하고 접착 강도를 극대화합니다.</p>
          </div>
          <div className="equipment-card">
            <h4>미니쉬 버</h4>
            <p>다이아몬드 코팅으로 정밀한 절삭이 가능하며, 진동이 적어 안정적인 시술을 돕습니다.</p>
          </div>
        </div>
      </section>

      <section className="business-section">
        <h3>제품 (Products)</h3>
        <div className="rnd-item">
          <h4>닥터미니쉬 (Dr. MINISH)</h4>
          <p>
            "치과 의사가 만든 구강 케어 브랜드"<br />
            병원 현장에서 환자들에게 추천할 수 있는 안전하고 효과적인 제품을 직접 만들었습니다.
            유해 성분을 배제하고, 구강 건강에 실질적인 도움을 주는 성분만을 담았습니다.
          </p>
          <ul className="dr-minish-principles">
            <li><strong>CLINICAL:</strong> 병원에서 검증된 전문성</li>
            <li><strong>SAFE:</strong> 누구나 안심할 수 있는 성분</li>
            <li><strong>PREVENTIVE:</strong> 치료 효과를 유지하는 예방 관리</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RnD;
