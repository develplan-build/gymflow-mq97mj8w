import React from 'react';
import { BarChart3, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ReportsProps {
  demoMode: boolean;
}

export function Reports({ demoMode }: ReportsProps) {
  const mockAttendance = [
    { name: 'Lun', presenze: 45 },
    { name: 'Mar', presenze: 52 },
    { name: 'Mer', presenze: 38 },
    { name: 'Gio', presenze: 65 },
    { name: 'Ven', presenze: 48 },
    { name: 'Sab', presenze: 25 },
    { name: 'Dom', presenze: 15 },
  ];

  const data = demoMode ? mockAttendance : [];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Report & Analisi</h1>
          <p style={{ color: 'var(--text-muted)' }}>Statistiche dettagliate sul tuo centro fitness.</p>
        </div>
        <button className="btn btn-outline" onClick={() => alert('Esportazione CSV in corso...')}>
          <Download size={20} style={{ marginRight: '0.5rem' }} />
          Esporta Dati
        </button>
      </div>

      <div className="card">
        <h3 className="card-title">Presenze Settimanali</h3>
        {data.length > 0 ? (
          <div style={{ height: '400px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', borderRadius: '0.5rem' }}
                  itemStyle={{ color: 'var(--text-color)' }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="presenze" fill="var(--accent-color)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="empty-state">
            <BarChart3 className="empty-state-icon" />
            <h3>Nessun dato disponibile</h3>
            <p style={{ marginTop: '0.5rem' }}>Attiva la modalità demo per visualizzare i grafici di esempio.</p>
          </div>
        )}
      </div>
    </div>
  );
}