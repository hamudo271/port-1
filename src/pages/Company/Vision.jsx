import React from 'react';
import './Company.css';

const Vision = () => {
  return (
    <div className="subpage-content-inner">
      <section className="vision-section">
        <div className="section-title">Our Vision</div>
        <h2 className="vision-statement">
          자연치아를 오래 사용할 수 있는<br />
          치아 건강 생태계를 구축하여<br />
          더 나은 삶을 누릴 수 있는 세상을 만듭니다
        </h2>
      </section>

      <section className="mission-section">
        <div className="section-title">Our Mission</div>
        <h2 className="mission-statement">
          지속적인 혁신을 통해<br />
          치과산업에 새로운 기준을 제시합니다
        </h2>
      </section>

      <section className="core-values-section">
        <div className="section-title">Core Values</div>
        <div className="values-list">
          <div className="value-card">
            <h3>Leading Technology</h3>
            <h4>앞서가는 기술</h4>
            <p>치아복구 솔루션과 진료 플랫폼을 공급해 예방부터 복구, 안티 에이징을 아우르는 치과 치료의 새로운 기준을 정립합니다.</p>
          </div>
          <div className="value-card">
            <h3>Evolving Innovation</h3>
            <h4>끊임 없는 진화</h4>
            <p>현실에 안주하지 않고 더 나은 기술과 서비스를 위해 끊임없이 연구하고 혁신합니다.</p>
          </div>
          <div className="value-card">
            <h3>Medical for All</h3>
            <h4>모두를 위한 의료</h4>
            <p>누구나 차별 없이 최상의 의료 서비스를 누릴 수 있는 환경을 만듭니다.</p>
          </div>
          <div className="value-card">
            <h3>Boundless Expansion</h3>
            <h4>경계를 넘는 확장</h4>
            <p>치과 영역을 넘어 헬스케어 전반으로, 국내를 넘어 세계로 뻗어나갑니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
