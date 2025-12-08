import React from 'react';
import './Business.css';

const Supply = () => {
  return (
    <div className="subpage-content-inner">
      <div className="business-header">
        <h2>치아복구 솔루션 미니쉬</h2>
        <p className="business-intro">
          미니쉬는 생체모방이론을 근거로 손상된 치아의 기능과 심미성을<br />
          원래 내 치아처럼 건강하고 자연스럽게 복구하는 치료법입니다.
        </p>
      </div>

      <section className="business-section">
        <h3>미니쉬 특장점</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <span className="feature-num">01</span>
            <h4>초정밀 가공기술</h4>
            <p>손상 부위의 형태에 관계없이 정밀하게 결합합니다. 다양한 굴곡, 모양, 두께를 구현할 수 있어 개별 치아의 고유한 특성을 반영한 맞춤치료가 가능합니다.</p>
          </div>
          <div className="feature-item">
            <span className="feature-num">02</span>
            <h4>접착기술</h4>
            <p>치아와 수복물 사이의 틈을 완벽하게 차단하여 세균 침투를 막고, 자연치아와 한 덩어리가 되게 하는 핵심 기술입니다.</p>
          </div>
          <div className="feature-item">
            <span className="feature-num">03</span>
            <h4>미니쉬블록</h4>
            <p>자연치아와 물성이 가장 유사한 재료를 사용합니다. 100년 전통의 독일 VITA사와 협력해 만든 2세대 미니쉬블록을 독점 사용합니다.</p>
          </div>
        </div>
      </section>

      <section className="business-section">
        <h3>미니쉬 타입</h3>
        <div className="type-grid">
          <div className="type-card">
            <h4>Dual MINISH</h4>
            <p className="type-name">듀얼 미니쉬</p>
            <p>치아 안쪽까지 광범위하게 손상된 치아를 앞뒤로 감싸주어 보호합니다.</p>
          </div>
          <div className="type-card">
            <h4>Pink MINISH</h4>
            <p className="type-name">핑크 미니쉬</p>
            <p>잇몸이 주저앉아 치아 뿌리가 노출된 경우, 잇몸 색상으로 심미적인 복구를 제공합니다.</p>
          </div>
          <div className="type-card">
            <h4>MINISH Bridge</h4>
            <p className="type-name">미니쉬 브릿지</p>
            <p>불필요한 치아 삭제 없이 상실된 치아를 복구하는 개선된 브릿지 치료입니다.</p>
          </div>
          <div className="type-card">
            <h4>Molar MINISH</h4>
            <p className="type-name">어금니 미니쉬</p>
            <p>치아 삭제량을 획기적으로 줄여 어금니를 보존적으로 치료합니다.</p>
          </div>
        </div>
      </section>

      <section className="business-section">
        <h3>미니쉬 상품</h3>
        <div className="product-list">
          <div className="product-item">
            <h4>MINISH Bella (미니쉬 벨라)</h4>
            <p>치아 삭제 없이 색상, 모양, 질감을 개선하는 심미 솔루션. 앞니 충치, 왜소치, 벌어짐 등에 적합합니다.</p>
          </div>
          <div className="product-item">
            <h4>MINISH Ever (미니쉬 에버)</h4>
            <p>노화로 손상된 치아의 기능과 심미를 회복하는 안티에이징 솔루션. 마모, 변색된 치아를 젊게 되돌립니다.</p>
          </div>
          <div className="product-item">
            <h4>MINISH Harmony (미니쉬 하모니)</h4>
            <p>교정 장치 없이 하루 만에 치열을 개선하는 솔루션. 삐뚤어진 치아, 덧니 등을 가지런하게 만듭니다.</p>
          </div>
          <div className="product-item">
            <h4>MINISH Remedy (미니쉬 래미디)</h4>
            <p>기존 보철물의 문제를 해결하고 자연치아를 복구하는 재치료 솔루션. 잇몸 변색, 염증 등을 개선합니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supply;
