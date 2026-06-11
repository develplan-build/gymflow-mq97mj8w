import React from 'react';
import { Bell, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

interface NotificationsProps {
  demoMode: boolean;
}

export function Notifications({ demoMode }: NotificationsProps) {
  const mockNotifs = [
    { id: 1, type: 'warning', title: 'Certificati in scadenza', message: 'Ci sono 5 clienti con certificato medico in scadenza questa settimana.', time: '2 ore fa' },
    { id: 2, type: 'success', title: 'Nuovo abbonamento', message: 'Marco Gialli ha acquistato il piano Pro Annuale.', time: '5 ore fa' },
    { id: 3, type: 'info', title: 'Aggiornamento sistema', message: 'GymFlow è stato aggiornato alla versione 2.1.', time: '1 giorno fa' },
  ];

  const notifs = demoMode ? mockNotifs : [];

  const getIcon = (type: string) => {
    switch(type) {
      case 'warning': return <AlertTriangle color="#f59e0b" />;
      case 'success': return <CheckCircle2 color="#10b981" />;
      default: return <Info color="#3b82f6" />;
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Notifiche</h1>
          <p style={{ color: 'var(--text-muted)' }}>Avvisi di sistema e promemoria.</p>
        </div>
        <button className="btn btn-outline" onClick={() => alert('Tutte le notifiche segnate come lette.')}>
          Segna tutte come lette
        </button>
      </div>

      <div className="card" style={{ padding: 0 }}>
        {notifs.length > 0 ? (
          <div>
            {notifs.map((n, i) => (
              <div key={n.id} style={{ padding: '1.5rem', borderBottom: i < notifs.length - 1 ? '1px solid var(--border-color)' : 'none', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '50%' }}>
                  {getIcon(n.type)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: 600 }}>{n.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{n.time}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{n.message}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Bell className="empty-state-icon" />
            <h3>Nessuna notifica</h3>
            <p style={{ marginTop: '0.5rem' }}>Non hai nuove notifiche da leggere.</p>
          </div>
        )}
      </div>
    </div>
  );
}