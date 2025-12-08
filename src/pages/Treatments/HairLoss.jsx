import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import './Treatments.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const HairLoss = () => {
  return (
    <div className="treatments-page">
      {/* 1. Hero */}
      <section className="treatments-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="sub-title">MEDICAL SOLUTIONS</span>
            <h1 className="main-title">
              Advanced<br />
              <span className="text-gradient">Hair Restoration</span>
            </h1>
            <p className="hero-desc">
              최첨단 의료 기술과 25년의 임상 노하우로<br />
              가장 확실하고 안전한 탈모 치료 솔루션을 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Hair Transplant (Split Screen) */}
      <section className="section split-section">
        <div className="container">
          <div className="split-layout">
            <motion.div 
              className="split-image sticky-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" alt="Hair Transplant" />
            </motion.div>
            <motion.div 
              className="split-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="section-label">SURGERY</span>
              <h2 className="section-title">비절개 모발이식<br />(FUE)</h2>
              <p className="section-desc">
                후두부의 모낭을 하나씩 채취하여 이식하는 비절개 방식은
                흉터와 통증을 최소화하며, 빠른 일상 복귀가 가능합니다.
                닥터모리모리만의 고밀도 슬릿 이식술로 자연스러운 헤어라인을 완성합니다.
              </p>
              <ul className="feature-list">
                <li><Check size={20} className="check-icon" /> <span>흉터 없는 비절개 채취</span></li>
                <li><Check size={20} className="check-icon" /> <span>생착률 95% 이상의 고밀도 이식</span></li>
                <li><Check size={20} className="check-icon" /> <span>수술 다음날 샴푸 가능</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Scalp Care (Split Screen Reversed) */}
      <section className="section split-section reversed">
        <div className="container">
          <div className="split-layout reversed">
            <div className="split-content">
              <span className="section-label">THERAPY</span>
              <h2 className="section-title">메디컬 두피 케어<br />(Scalp Care)</h2>
              <p className="section-desc">
                탈모 초기 예방부터 이식 후 생착률 증대까지.
                개인별 두피 타입에 맞춘 1:1 맞춤형 메디컬 케어 프로그램입니다.
                고농축 영양 앰플과 특수 기기를 통해 두피 환경을 근본적으로 개선합니다.
              </p>
              <ul className="feature-list">
                <li><Check size={20} className="check-icon" /> <span>두피 스케일링 & 디톡스</span></li>
                <li><Check size={20} className="check-icon" /> <span>모낭 주사 (메조테라피)</span></li>
                <li><Check size={20} className="check-icon" /> <span>줄기세포 배양액 침투</span></li>
              </ul>
            </div>
            <div className="split-image sticky-image">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop" alt="Scalp Care" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="cta-title">당신의 변화는<br />지금 시작됩니다.</h2>
          <button className="btn-primary">
            상담 예약하기 <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HairLoss;
