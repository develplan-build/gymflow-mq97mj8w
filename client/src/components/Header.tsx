import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Moon, Database, Menu, User, LogOut, Settings } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  demoMode: boolean;
  toggleDemoMode: () => void;
  toggleMobileMenu: () => void;
}

export function Header({ theme, toggleTheme, demoMode, toggleDemoMode, toggleMobileMenu }: HeaderProps) {
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    if (!path) return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="app-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="icon-btn mobile-menu-btn" onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{getPageTitle()}</h2>
      </div>
      
      <div className="header-actions">
        <button 
          className="btn btn-outline"
          onClick={toggleDemoMode}
          style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', gap: '0.5rem' }}
        >
          <Database size={16} />
          {demoMode ? 'Dati Demo: ON' : 'Dati Demo: OFF'}
        </button>
        
        <button className="icon-btn" onClick={toggleTheme} title="Cambia tema">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div style={{ position: 'relative' }}>
          <button 
            className="icon-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{ background: 'var(--accent-color)', color: 'white' }}
          >
            <User size={20} />
          </button>
          
          {showProfileMenu && (
            <div style={{ 
              position: 'absolute', 
              right: 0, 
              top: '100%', 
              marginTop: '0.5rem', 
              background: 'var(--surface-color)', 
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              minWidth: '200px',
              zIndex: 50,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '0.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '0.5rem' }}>
                <p style={{ fontWeight: 600 }}>Admin User</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>admin@gymflow.com</p>
              </div>
              <button className="nav-item" style={{ width: '100%', border: 'none', background: 'transparent', textAlign: 'left' }}>
                <Settings size={16} /> Impostazioni
              </button>
              <button className="nav-item" style={{ width: '100%', border: 'none', background: 'transparent', textAlign: 'left', color: 'var(--accent-color)' }}>
                <LogOut size={16} /> Esci
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}