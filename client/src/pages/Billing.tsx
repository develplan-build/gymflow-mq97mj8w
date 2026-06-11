import React, { useState } from 'react';
import { CreditCard, Download, ExternalLink, AlertCircle } from 'lucide-react';
import { HAS_BACKEND } from '../config';

interface BillingProps {
  demoMode: boolean;
}

export function Billing({ demoMode }: BillingProps) {
  const mockInvoices = [
    { id: 'INV-001', client: 'Mario Rossi', amount: '€ 49,00', date: '2023-10-01', status: 'paid' },
    { id: 'INV-002', client: 'Laura Bianchi', amount: '€ 99,00', date: '2023-10-05', status: 'paid' },
    { id: 'INV-003', client: 'Giuseppe Verdi', amount: '€ 49,00', date: '2023-10-10', status: 'pending' },
  ];

  const invoices = demoMode ? mockInvoices : [];

  const handleStripeConnect = () => {
    if (!HAS_BACKEND) {
      alert('Questa funzione richiede la configurazione del backend e delle chiavi Stripe (vedi README).');
      return;
    }
    alert('Reindirizzamento a Stripe Connect...');
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Fatturazione</h1>
          <p style={{ color: 'var(--text-muted)' }}>Gestisci pagamenti, abbonamenti e fatture.</p>
        </div>
        <button className="btn btn-primary" onClick={handleStripeConnect}>
          <ExternalLink size={20} style={{ marginRight: '0.5rem' }} />
          Collega Stripe
        </button>
      </div>

      {!HAS_BACKEND && (
        <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <AlertCircle color="#f59e0b" size={24} style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ color: '#f59e0b', marginBottom: '0.25rem' }}>Integrazione Pagamenti Disabilitata</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              L'app è in modalità demo locale. Per abilitare i pagamenti reali con Stripe, configura il backend e inserisci le tue chiavi API come descritto nel README.
            </p>
          </div>
        </div>
      )}

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Incassato (Mese)</span>
            <CreditCard size={20} />
          </div>
          <div className="kpi-value">{demoMode ? '€ 4.250' : '€ 0'}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Da Incassare</span>
            <AlertCircle size={20} />
          </div>
          <div className="kpi-value">{demoMode ? '€ 350' : '€ 0'}</div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Ultime Fatture</h3>
        {invoices.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Numero</th>
                  <th>Cliente</th>
                  <th>Data</th>
                  <th>Importo</th>
                  <th>Stato</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(inv => (
                  <tr key={inv.id}>
                    <td style={{ fontWeight: 500 }}>{inv.id}</td>
                    <td>{inv.client}</td>
                    <td>{inv.date}</td>
                    <td>{inv.amount}</td>
                    <td>
                      <span className={`badge ${inv.status === 'paid' ? 'badge-success' : 'badge-warning'}`}>
                        {inv.status === 'paid' ? 'Pagata' : 'In attesa'}
                      </span>
                    </td>
                    <td>
                      <button className="icon-btn" onClick={() => alert('Download PDF fattura')} title="Scarica PDF">
                        <Download size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <CreditCard className="empty-state-icon" />
            <h3>Nessuna fattura</h3>
            <p style={{ marginTop: '0.5rem' }}>Non ci sono transazioni registrate al momento.</p>
          </div>
        )}
      </div>
    </div>
  );
}