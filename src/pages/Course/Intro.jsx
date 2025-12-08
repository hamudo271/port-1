import React from 'react';
import './Course.css';

const Intro = () => {
  return (
    <div className="subpage-content-inner">
      <div className="course-header">
        <h2>미니쉬 코스 소개</h2>
        <p className="course-intro">
          미니쉬코스는 미니쉬 치료의 철학과 술식을 임상에서 실천하는<br />
          전문 의료진을 양성하는 교육 프로그램입니다.
        </p>
      </div>

      <section className="course-section">
        <h3>프로그램 구성</h3>
        <p className="section-desc">
          미니쉬는 기존 시술법과 다르게 특별한 테크닉이 필요하기 때문에 
          반드시 정규 코스를 수료해야 합니다.
        </p>
        <div className="program-steps">
          <div className="step-card">
            <div className="step-header">STEP 01</div>
            <h4>이론 강의</h4>
            <ul>
              <li>미니쉬 철학 및 배경</li>
              <li>미니쉬 블록, 접착제 이해</li>
              <li>프렙(Prep) 및 내면처리 방법</li>
              <li>임상 사례 분석</li>
            </ul>
          </div>
          <div className="step-card">
            <div className="step-header">STEP 02</div>
            <h4>실습 (Hands-on)</h4>
            <ul>
              <li>3D 스캐너 활용 실습</li>
              <li>미니쉬 프렙 실습</li>
              <li>기공물 세팅(Setting) 실습</li>
              <li>1:1 밀착 지도</li>
            </ul>
          </div>
          <div className="step-card">
            <div className="step-header">STEP 03</div>
            <h4>수료 및 인증</h4>
            <ul>
              <li>MINISH Doctor 수료증 발급</li>
              <li>MINISH Provider 신청 자격 부여</li>
              <li>지속적인 임상 지원</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="course-section">
        <h3>차별화된 교육과정</h3>
        <div className="differentiation-grid">
          <div className="diff-item">
            <h4>실전 같은 실습</h4>
            <p>임시치아가 필요 없는 미니쉬의 특성을 반영하여, 실제 치료와 동일한 프로토콜로 세팅까지 완벽하게 실습합니다.</p>
          </div>
          <div className="diff-item">
            <h4>Live Surgery 참관</h4>
            <p>실제 환자 치료 과정을 라이브로 참관하며 생생한 현장 노하우를 습득할 수 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="course-stats">
        <div className="stat-box">
          <h3>342명</h3>
          <p>미니쉬 코스 수료 전문의 (2025.11 기준)</p>
          <div className="stat-detail">
            <span>국내 245명</span> | <span>해외 97명</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
