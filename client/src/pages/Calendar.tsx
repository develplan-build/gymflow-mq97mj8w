import React from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  demoMode: boolean;
}

export function Calendar({ demoMode }: CalendarProps) {
  const days = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8:00 to 19:00

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Calendario</h1>
          <p style={{ color: 'var(--text-muted)' }}>Visualizzazione settimanale delle attività.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="icon-btn"><ChevronLeft size={20} /></button>
          <span style={{ fontWeight: 500 }}>Ottobre 2023</span>
          <button className="icon-btn"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ padding: '1rem', borderRight: '1px solid var(--border-color)' }}></div>
          {days.map(day => (
            <div key={day} style={{ padding: '1rem', textAlign: 'center', fontWeight: 500, borderRight: '1px solid var(--border-color)' }}>
              {day}
            </div>
          ))}
        </div>
        
        <div style={{ height: '600px', overflowY: 'auto' }}>
          {hours.map(hour => (
            <div key={hour} style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ padding: '1rem 0.5rem', textAlign: 'right', color: 'var(--text-muted)', fontSize: '0.875rem', borderRight: '1px solid var(--border-color)' }}>
                {hour}:00
              </div>
              {days.map((day, i) => (
                <div key={`${day}-${hour}`} style={{ borderRight: '1px solid var(--border-color)', position: 'relative', minHeight: '60px' }}>
                  {demoMode && hour === 18 && i === 0 && (
                    <div style={{ position: 'absolute', top: '4px', left: '4px', right: '4px', backgroundColor: 'rgba(239, 68, 68, 0.2)', borderLeft: '3px solid var(--accent-color)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                      <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>Crossfit</div>
                      <div style={{ color: 'var(--text-muted)' }}>15/20 iscritti</div>
                    </div>
                  )}
                  {demoMode && hour === 10 && i === 2 && (
                    <div style={{ position: 'absolute', top: '4px', left: '4px', right: '4px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderLeft: '3px solid #10b981', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                      <div style={{ fontWeight: 600, color: '#10b981' }}>Pilates</div>
                      <div style={{ color: 'var(--text-muted)' }}>8/10 iscritti</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}