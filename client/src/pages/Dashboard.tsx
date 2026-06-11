import React from 'react';
import { Users, CreditCard, TrendingUp, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockRevenueData } from '../lib/mockData';

interface DashboardProps {
  demoMode: boolean;
}

export function Dashboard({ demoMode }: DashboardProps) {
  const data = demoMode ? mockRevenueData : [];
  const kpis = demoMode ? {
    members: 156,
    revenue: '€ 12.450',
    active: '89%',
    newThisMonth: 24
  } : {
    members: 0,
    revenue: '€ 0',
    active: '0%',
    newThisMonth: 0
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Benvenuto in GymFlow</h1>
          <p style={{ color: 'var(--text-muted)' }}>Ecco un riepilogo delle performance del tuo centro.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Funzione di esportazione report disponibile con backend collegato.')}>
          Esporta Report
        </button>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Membri Totali</span>
            <Users size={20} />
          </div>
          <div className="kpi-value">{kpis.members}</div>
          <div className="kpi-trend trend-up">+12% rispetto al mese scorso</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Fatturato Mensile</span>
            <CreditCard size={20} />
          </div>
          <div className="kpi-value">{kpis.revenue}</div>
          <div className="kpi-trend trend-up">+8% rispetto al mese scorso</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Tasso di Attività</span>
            <Activity size={20} />
          </div>
          <div className="kpi-value">{kpis.active}</div>
          <div className="kpi-trend trend-down">-2% rispetto al mese scorso</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Nuovi Iscritti</span>
            <TrendingUp size={20} />
          </div>
          <div className="kpi-value">{kpis.newThisMonth}</div>
          <div className="kpi-trend trend-up">+5% rispetto al mese scorso</div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Andamento Fatturato</h3>
        {data.length > 0 ? (
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', borderRadius: '0.5rem' }}
                  itemStyle={{ color: 'var(--text-color)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--accent-color)" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="empty-state" style={{ padding: '2rem' }}>
            <Activity className="empty-state-icon" />
            <p>Nessun dato disponibile. Attiva la modalità demo o aggiungi dati reali.</p>
          </div>
        )}
      </div>
    </div>
  );
}