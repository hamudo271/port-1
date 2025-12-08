import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SubpageLayout from './components/SubpageLayout';
import './App.css';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Greetings = lazy(() => import('./pages/Intro/Greetings'));
const Philosophy = lazy(() => import('./pages/Intro/Philosophy'));
const HairLoss = lazy(() => import('./pages/Treatments/HairLoss'));
const ScalpCare = lazy(() => import('./pages/Treatments/ScalpCare'));
const Steps = lazy(() => import('./pages/Process/Steps'));
const Location = lazy(() => import('./pages/Location/Location'));

// Loading Component
const Loading = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    background: '#fff',
    color: '#004d40'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <BrowserRouter basename="/port-1/">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="intro" element={<SubpageLayout title="Clinic Intro" />}>
              <Route path="greetings" element={<Greetings />} />
              <Route path="philosophy" element={<Philosophy />} />
              <Route index element={<Greetings />} />
            </Route>
            
            <Route path="treatments" element={<SubpageLayout title="Treatments" />}>
              <Route path="hair-loss" element={<HairLoss />} />
              <Route path="scalp-care" element={<ScalpCare />} />
              <Route index element={<HairLoss />} />
            </Route>

            <Route path="process" element={<SubpageLayout title="Process" />}>
              <Route path="steps" element={<Steps />} />
              <Route index element={<Steps />} />
            </Route>

            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
