import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SubpageLayout from './components/SubpageLayout';
import Home from './pages/Home';
import * as Intro from './pages/Intro';
import * as Treatments from './pages/Treatments';
import * as Process from './pages/Process';
import Location from './pages/Location/Location';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/port-1/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="intro" element={<SubpageLayout title="Clinic Intro" />}>
            <Route path="greetings" element={<Intro.Greetings />} />
            <Route path="philosophy" element={<Intro.Philosophy />} />
            <Route index element={<Intro.Greetings />} />
          </Route>
          
          <Route path="treatments" element={<SubpageLayout title="Treatments" />}>
            <Route path="hair-loss" element={<Treatments.HairLoss />} />
            <Route path="scalp-care" element={<Treatments.ScalpCare />} />
            <Route index element={<Treatments.HairLoss />} />
          </Route>

          <Route path="process" element={<SubpageLayout title="Process" />}>
            <Route path="steps" element={<Process.Steps />} />
            <Route index element={<Process.Steps />} />
          </Route>

          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
