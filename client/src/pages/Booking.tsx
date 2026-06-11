import React, { useState, useEffect } from 'react';
import { CalendarDays, Plus, Check, X } from 'lucide-react';
import { mockBookings } from '../lib/mockData';

interface BookingProps {
  demoMode: boolean;
}

export function Booking({ demoMode }: BookingProps) {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    if (demoMode) {
      setBookings(mockBookings);
    } else {
      setBookings([]);
    }
  }, [demoMode]);

  const handleStatusChange = (id: string, newStatus: string) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Prenotazioni</h1>
          <p style={{ color: 'var(--text-muted)' }}>Gestisci le prenotazioni per corsi e lezioni private.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Apertura modale nuova prenotazione')}>
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Nuova Prenotazione
        </button>
      </div>

      <div className="card">
        {bookings.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Corso/Servizio</th>
                  <th>Data</th>
                  <th>Ora</th>
                  <th>Stato</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id}>
                    <td style={{ fontWeight: 500 }}>{booking.client}</td>
                    <td>{booking.class}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>
                      <span className={`badge ${booking.status === 'confirmed' ? 'badge-success' : 'badge-warning'}`}>
                        {booking.status === 'confirmed' ? 'Confermato' : 'Lista d\'attesa'}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          className="icon-btn" 
                          style={{ color: '#10b981' }}
                          onClick={() => handleStatusChange(booking.id, 'confirmed')}
                          title="Conferma"
                        >
                          <Check size={18} />
                        </button>
                        <button 
                          className="icon-btn" 
                          style={{ color: '#ef4444' }}
                          onClick={() => setBookings(bookings.filter(b => b.id !== booking.id))}
                          title="Annulla"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <CalendarDays className="empty-state-icon" />
            <h3>Nessuna prenotazione</h3>
            <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Non ci sono prenotazioni attive al momento.
            </p>
            <button className="btn btn-primary" onClick={() => alert('Apertura modale nuova prenotazione')}>
              Aggiungi Prenotazione
            </button>
          </div>
        )}
      </div>
    </div>
  );
}