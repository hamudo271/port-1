import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, MapPin, Phone, Clock, ShieldCheck, Award, HeartHandshake, Microscope, Stethoscope, GraduationCap, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import IntroOverlay from '../components/common/IntroOverlay';
import CountUp from '../components/common/CountUp';
import './Home.css';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      <div className="home-wrapper">
        {/* 1. Hero Section */}
        <section className="hero-section">
          <motion.div style={{ y: y1 }} className="video-background">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
              alt="Luxury Clinic" 
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </motion.div>
          
          <div className="hero-content container">
            <motion.div 
              initial="hidden"
              animate={!showIntro ? "visible" : "hidden"}
              variants={staggerContainer}
              className="hero-text-group"
            >
              <motion.div variants={fadeInUp} className="hero-badge">
                Since 1998
              </motion.div>
              <motion.h1 variants={fadeInUp} className="hero-title">
                The Standard of<br />
                <span className="text-gradient">Hair Regeneration</span>
                <span className="video-placeholder-text">[영상배경예정]</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="hero-desc">
                닥터모리모리는 탈모 치료의 새로운 기준을 제시합니다.<br />
                끊임없는 연구와 혁신적인 기술로 잃어버린 희망을 되찾아 드립니다.
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-btn-wrapper">
                <Link to="/treatments" className="btn-primary">
                  진료 예약하기 <ArrowRight size={18} />
                </Link>
                <button className="btn-outline">
                  <Play size={18} /> Brand Film
                </button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
          >
            <span className="scroll-text">Scroll to Explore</span>
            <div className="scroll-line"></div>
          </motion.div>
        </section>

        {/* 2. Intro Text Section */}
        <section className="section intro-text-section">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="intro-text-content"
            >
              <h2 className="intro-heading">
                We provide the standard<br />
                for hair loss treatment.
              </h2>
              <div className="intro-divider"></div>
              <p className="intro-paragraph">
                닥터모리모리는 단순한 치료를 넘어, 환자의 삶을 변화시키는 것을 목표로 합니다.<br />
                자연에서 찾은 해답과 첨단 의학 기술의 조화로 가장 안전하고 효과적인 솔루션을 제공합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. Doctor's Philosophy */}
        <section className="section philosophy-section">
          <div className="container">
            <div className="philosophy-grid">
              <motion.div 
                className="philosophy-image-wrapper"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                  alt="Doctor" 
                  className="philosophy-image" 
                />
                <div className="image-accent-box"></div>
              </motion.div>
              <motion.div 
                className="philosophy-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-label">PHILOSOPHY</span>
                <h2 className="section-title">진심을 담은<br />치료의 시작</h2>
                <p className="section-desc">
                  "탈모 치료는 단순히 머리카락을 자라게 하는 것이 아닙니다.
                  환자분의 잃어버린 자신감과 삶의 질을 회복시켜 드리는 과정입니다."
                </p>
                <p className="section-desc">
                  닥터모리모리는 한 분 한 분의 고민에 깊이 공감하며,
                  가족을 치료하는 마음으로 정성을 다합니다.
                  과잉 진료 없이, 꼭 필요한 치료만을 정직하게 제안합니다.
                </p>
                <div className="signature">
                  <span className="name">Dr. Morimori</span>
                  <span className="title">대표원장</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. The Morimori Difference (3 Cards) */}
        <section className="section difference-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-label">WHY DR. MORIMORI</span>
              <h2 className="section-title">닥터모리모리만의<br />3가지 약속</h2>
            </div>
            
            <div className="difference-grid">
              {[
                { icon: <ShieldCheck size={40} />, title: "Trust (신뢰)", desc: "과잉 진료 없는 정직한 상담과 검증된 치료법만을 제안합니다." },
                { icon: <Award size={40} />, title: "Hope (희망)", desc: "탈모는 치료될 수 있다는 믿음과 희망을 드립니다." },
                { icon: <HeartHandshake size={40} />, title: "Care (케어)", desc: "치료 그 이상의 마음까지 어루만지는 따뜻한 케어를 제공합니다." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="difference-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="card-icon-circle">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Business Areas (4 Grid) */}
        <section className="section business-section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">BUSINESS AREA</span>
              <h2 className="section-title">Total Hair Solution</h2>
            </div>
            
            <div className="business-grid">
              {[
                { id: '01', title: 'Medical', subtitle: 'Hair Transplant', desc: '최첨단 장비와 숙련된 의료진의 노하우', icon: <Stethoscope />, img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop' },
                { id: '02', title: 'R&D', subtitle: 'Stem Cell Research', desc: '줄기세포 배양액 및 AI 진단 시스템', icon: <Microscope />, img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
                { id: '03', title: 'Product', subtitle: 'Home Care', desc: '고기능성 홈케어 제품 라인업', icon: <ShoppingBag />, img: 'https://images.unsplash.com/photo-1556228720-1987594a8a63?q=80&w=2070&auto=format&fit=crop' },
                { id: '04', title: 'Academy', subtitle: 'Training', desc: '탈모 전문가 양성 교육 프로그램', icon: <GraduationCap />, img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop' }
              ].map((area, index) => (
                <motion.div 
                  key={index}
                  className="business-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="business-card-bg">
                    <img src={area.img} alt={area.title} />
                    <div className="overlay"></div>
                  </div>
                  <div className="business-content">
                    <div className="business-icon">{area.icon}</div>
                    <span className="business-id">{area.id}</span>
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                    <Link to="/intro" className="business-link">View More <ArrowRight size={16} /></Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Treatment Process (Timeline) */}
        <section className="section process-section">
          <div className="container">
            <div className="section-header text-center text-white">
              <span className="section-label text-accent">PROCESS</span>
              <h2 className="section-title text-white">Systematic Flow</h2>
            </div>
            
            <div className="process-timeline">
              {[
                "정밀 진단", "1:1 상담", "맞춤 처방", "집중 치료", "홈케어 코칭", "경과 체크", "유지 관리"
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="process-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="step-circle">{index + 1}</div>
                  <h3 className="step-title">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Technology (Parallax) */}
        <section className="section tech-section">
          <div className="container">
            <div className="tech-wrapper">
              <div className="tech-content">
                <span className="section-label">TECHNOLOGY</span>
                <h2 className="section-title">Data Driven<br />Solution</h2>
                <p className="section-desc">
                  5만 건 이상의 임상 데이터와 AI 기술을 결합하여<br />
                  개인별 최적화된 치료 솔루션을 제공합니다.
                </p>
                <ul className="tech-list">
                  <li>
                    <strong>3D Scalp Scanning</strong>
                    <span>두피의 모공 상태, 밀도, 각질량을 3차원으로 정밀 분석</span>
                  </li>
                  <li>
                    <strong>AI Prognosis</strong>
                    <span>빅데이터 딥러닝을 통한 탈모 진행 예측</span>
                  </li>
                </ul>
              </div>
              <div className="tech-visual">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Tech" />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Interior (Gallery) */}
        <section className="section interior-section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">FACILITY</span>
              <h2 className="section-title">Healing Space</h2>
            </div>
            <div className="interior-grid">
              <div className="interior-item large">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="Lobby" />
              </div>
              <div className="interior-item">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="Treatment Room" />
              </div>
              <div className="interior-item">
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop" alt="Consultation" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Global Network (Map) */}
        <section className="section network-section">
          <div className="container">
            <div className="network-content text-center">
              <motion.span 
                className="section-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                GLOBAL NETWORK
              </motion.span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                World Class Clinic
              </motion.h2>
              <motion.p 
                className="section-desc"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                서울 강남 본점을 시작으로 전 세계로 뻗어나가는<br />
                닥터모리모리의 글로벌 네트워크를 만나보세요.
              </motion.p>
              
              <div className="network-stats">
                <div className="stat-box">
                  <span className="stat-num">
                    <CountUp end="50000" suffix="+" />
                  </span>
                  <span className="stat-label">Patients</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">
                    <CountUp end="8" />
                  </span>
                  <span className="stat-label">Global Branches</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">
                    <CountUp end="98" suffix="%" />
                  </span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. News Section */}
        <section className="section news-section">
          <div className="container">
            <div className="news-header">
              <h2 className="section-title-small">News & Insights</h2>
              <Link to="/news" className="btn-more">View All</Link>
            </div>
            <div className="news-list">
              {[
                { date: '2025.12.08', cat: 'Press', title: '닥터모리모리, 2025 글로벌 헬스케어 대상 수상' },
                { date: '2025.11.20', cat: 'Notice', title: '강남 본점 확장 이전 안내 및 진료 시간 변경' },
                { date: '2025.11.15', cat: 'Research', title: 'SCI급 국제 학술지 탈모 치료 신기술 논문 게재' }
              ].map((item, index) => (
                <div key={index} className="news-item">
                  <span className="news-date">{item.date}</span>
                  <span className="news-cat">{item.cat}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <ArrowRight className="news-arrow" size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
