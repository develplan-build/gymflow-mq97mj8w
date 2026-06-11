import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CalendarDays, 
  BarChart3, 
  CreditCard, 
  FileText, 
  Clock, 
  Bell,
  Dumbbell,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const navItems = [
    { path: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/app/crm', icon: Users, label: 'Clienti (CRM)' },
    { path: '/app/booking', icon: CalendarDays, label: 'Prenotazioni' },
    { path: '/app/calendar', icon: Clock, label: 'Calendario' },
    { path: '/app/scheduling', icon: Dumbbell, label: 'Corsi & Schede' },
    { path: '/app/billing', icon: CreditCard, label: 'Fatturazione' },
    { path: '/app/reports', icon: BarChart3, label: 'Report & Analisi' },
    { path: '/app/documents', icon: FileText, label: 'Documenti' },
    { path: '/app/notifications', icon: Bell, label: 'Notifiche' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }}
        />
      )}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Dumbbell size={28} />
          <span>GymFlow</span>
          <button 
            className="icon-btn lg:hidden ml-auto"
            onClick={() => setIsOpen(false)}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}