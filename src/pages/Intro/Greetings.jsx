import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Star, Clock } from 'lucide-react';
import './Intro.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Greetings = () => {
  return (
    <div className="intro-page">
      {/* 1. Parallax Hero */}
      <section className="intro-hero">
        <div className="intro-hero-bg">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="Clinic Interior" />
          <div className="overlay"></div>
        </div>
        <div className="container intro-hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="sub-title"
          >
            PHILOSOPHY OF CARE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="main-title"
          >
            진심을 담은 치료,<br />
            <span className="text-gold">희망</span>을 심다.
          </motion.h1>
        </div>
      </section>

      {/* 2. Doctor's Message */}
      <section className="section doctor-message-section">
        <div className="container">
          <div className="doctor-grid">
            <motion.div 
              className="doctor-image-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="Dr. Morimori" />
              <div className="frame-accent"></div>
            </motion.div>
            
            <motion.div 
              className="doctor-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="section-title">
                탈모 치료의 본질은<br />
                <span className="text-accent">공감</span>에서 시작됩니다.
              </motion.h2>
              <motion.div variants={fadeInUp} className="message-body">
                <p>
                  안녕하십니까, 닥터모리모리 대표원장입니다.
                </p>
                <p>
                  지난 25년간 수많은 탈모 환자분들을 만나며 제가 깨달은 것은,
                  탈모 치료는 단순히 머리카락을 심는 기술이 아니라는 것입니다.
                  그것은 환자분이 잃어버린 자신감을 되찾아드리고,
                  다시 거울 앞에 당당히 설 수 있는 용기를 드리는 과정입니다.
                </p>
                <p>
                  저희는 화려한 마케팅보다는 정직한 진료를,
                  빠른 시술보다는 안전하고 확실한 결과를 약속드립니다.
                  당신의 고민을 제 가족의 일처럼 여기며,
                  끝까지 함께하는 든든한 주치의가 되겠습니다.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="signature-block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="signature-img" />
                <div className="doctor-info">
                  <span className="name">Dr. Morimori</span>
                  <span className="role">Representative Director</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section values-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label">CORE VALUES</span>
            <h2 className="section-title">닥터모리모리의 약속</h2>
          </motion.div>

          <div className="values-grid">
            {[
              { icon: <Shield size={40} />, title: "Trust", desc: "검증된 의술과 정직한 진료로 쌓아온 25년의 신뢰" },
              { icon: <Heart size={40} />, title: "Care", desc: "환자의 마음까지 치유하는 세심하고 따뜻한 케어" },
              { icon: <Star size={40} />, title: "Excellence", desc: "끊임없는 연구로 완성한 독보적인 치료 노하우" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. History Timeline */}
      <section className="section history-section">
        <div className="container">
          <div className="history-wrapper">
            <div className="history-header">
              <span className="section-label">HISTORY</span>
              <h2 className="section-title">걸어온 길</h2>
            </div>
            
            <div className="timeline">
              {[
                { year: "2025", title: "글로벌 헬스케어 대상 수상", desc: "탈모 치료 부문 3년 연속 대상" },
                { year: "2023", title: "AI 진단 시스템 도입", desc: "빅데이터 기반 정밀 진단 솔루션 구축" },
                { year: "2015", title: "줄기세포 연구소 설립", desc: "자가유래 줄기세포 치료법 개발" },
                { year: "2005", title: "강남 본점 확장 이전", desc: "국내 최대 규모 탈모 전문 센터 오픈" },
                { year: "1998", title: "닥터모리모리 개원", desc: "환자 중심의 탈모 치료 시작" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="year">{item.year}</div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greetings;
