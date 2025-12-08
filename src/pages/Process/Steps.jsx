import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Steps = () => {
  const steps = [
    {
      num: "01",
      title: "1:1 Consultation",
      desc: "전담 의료진과의 심층 상담을 통해 환자분의 고민을 정확히 파악하고, 개인별 라이프스타일을 고려한 치료 방향을 설정합니다.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    },
    {
      num: "02",
      title: "AI Precision Diagnosis",
      desc: "최첨단 AI 두피 진단 시스템으로 모공 밀도, 두피 상태, 탈모 진행도를 정밀 분석하여 과학적인 데이터를 확보합니다.",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      num: "03",
      title: "Custom Design",
      desc: "얼굴형, 황금비율, 모발의 방향까지 고려하여 가장 자연스럽고 아름다운 헤어라인을 디자인합니다.",
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
    },
    {
      num: "04",
      title: "Safe Procedure",
      desc: "철저한 멸균 시스템과 숙련된 의료진의 집도로 안전하게 시술이 진행되며, 통증과 붓기를 최소화합니다.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
    },
    {
      num: "05",
      title: "Premium Aftercare",
      desc: "시술 후에도 정기적인 경과 체크와 두피 케어 프로그램을 통해 이식모의 생착률을 극대화하고 건강한 두피를 유지합니다.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="process-page">
      {/* 1. Hero */}
      <section className="process-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="sub-title">SYSTEMATIC FLOW</span>
            <h1 className="main-title">
              Journey to<br />
              <span className="text-gradient">Restoration</span>
            </h1>
            <p className="hero-desc">
              상담부터 사후관리까지, 닥터모리모리의<br />
              체계적이고 전문적인 진료 프로세스를 경험해보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Zig-Zag Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="process-list">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`process-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="process-image">
                  <img src={step.img} alt={step.title} />
                  <div className="step-number">{step.num}</div>
                </div>
                <div className="process-content">
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
