import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import './SubpageLayout.css';

const SubpageLayout = ({ title, activeTab }) => {
  const location = useLocation();
  
  // This is a simplified example. In a real app, we might derive the title/tabs from the route config or props.
  // For now, we'll assume the parent route passes the section title.

  return (
    <div className="subpage-layout">
      <div className="subpage-hero">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="subpage-container container">
        <aside className="subpage-sidebar">
          <h3>{title}</h3>
          <ul>
            {/* These links would ideally be dynamic based on the section */}
            {title === 'Company' && (
              <>
                <li><Link to="/company/greetings" className={location.pathname.includes('greetings') ? 'active' : ''}>인사말</Link></li>
                <li><Link to="/company/vision" className={location.pathname.includes('vision') ? 'active' : ''}>비전&미션</Link></li>
                <li><Link to="/company/history" className={location.pathname.includes('history') ? 'active' : ''}>히스토리</Link></li>
                <li><Link to="/company/esg" className={location.pathname.includes('esg') ? 'active' : ''}>ESG</Link></li>
              </>
            )}
            {title === 'Business' && (
              <>
                <li><Link to="/business/supply" className={location.pathname.includes('supply') ? 'active' : ''}>미니쉬 공급</Link></li>
                <li><Link to="/business/rnd" className={location.pathname.includes('rnd') ? 'active' : ''}>재료/장비/제품 R&D</Link></li>
                <li><Link to="/business/platform" className={location.pathname.includes('platform') ? 'active' : ''}>플랫폼 개발</Link></li>
                <li><Link to="/business/consulting" className={location.pathname.includes('consulting') ? 'active' : ''}>경영 컨설팅</Link></li>
              </>
            )}
             {title === 'Course' && (
              <>
                <li><Link to="/course/intro" className={location.pathname.includes('intro') ? 'active' : ''}>미니쉬 코스 소개</Link></li>
                <li><Link to="/course/schedule" className={location.pathname.includes('schedule') ? 'active' : ''}>미니쉬 코스 일정</Link></li>
                <li><Link to="/course/provider" className={location.pathname.includes('provider') ? 'active' : ''}>미니쉬 프로바이더</Link></li>
              </>
            )}
          </ul>
        </aside>
        <main className="subpage-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SubpageLayout;
