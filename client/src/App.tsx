import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { CRM } from './pages/CRM';
import { Booking } from './pages/Booking';
import { Reports } from './pages/Reports';
import { Calendar } from './pages/Calendar';
import { Billing } from './pages/Billing';
import { Documents } from './pages/Documents';
import { Scheduling } from './pages/Scheduling';
import { Notifications } from './pages/Notifications';
import { HAS_BACKEND } from './config';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [demoMode, setDemoMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const toggleDemoMode = () => setDemoMode(!demoMode);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/app/*" element={
          <div className="app-layout">
            <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
            <div className="main-content">
              <Header 
                theme={theme} 
                toggleTheme={toggleTheme} 
                demoMode={demoMode} 
                toggleDemoMode={toggleDemoMode}
                toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
              {!HAS_BACKEND && (
                <div className="demo-banner">
                  Modalità demo - i dati sono locali. Scarica il codice e segui il README per attivare backend, pagamenti e database reali.
                </div>
              )}
              <div className="page-content">
                <Routes>
                  <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard demoMode={demoMode} />} />
                  <Route path="/crm" element={<CRM demoMode={demoMode} />} />
                  <Route path="/booking" element={<Booking demoMode={demoMode} />} />
                  <Route path="/reports" element={<Reports demoMode={demoMode} />} />
                  <Route path="/calendar" element={<Calendar demoMode={demoMode} />} />
                  <Route path="/billing" element={<Billing demoMode={demoMode} />} />
                  <Route path="/documents" element={<Documents demoMode={demoMode} />} />
                  <Route path="/scheduling" element={<Scheduling demoMode={demoMode} />} />
                  <Route path="/notifications" element={<Notifications demoMode={demoMode} />} />
                </Routes>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}