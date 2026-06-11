import React, { useState } from 'react';
import { Dumbbell, Plus, Play } from 'lucide-react';

interface SchedulingProps {
  demoMode: boolean;
}

export function Scheduling({ demoMode }: SchedulingProps) {
  const [activeTab, setActiveTab] = useState<'classes' | 'workouts'>('classes');

  const mockClasses = [
    { id: 1, name: 'Crossfit Base', instructor: 'Marco', duration: '60 min', capacity: 20 },
    { id: 2, name: 'Yoga Flow', instructor: 'Elena', duration: '45 min', capacity: 15 },
  ];

  const mockWorkouts = [
    { id: 1, name: 'Ipertrofia Upper Body', level: 'Intermedio', exercises: 8 },
    { id: 2, name: 'Dimagrimento HIIT', level: 'Avanzato', exercises: 6 },
  ];

  const classes = demoMode ? mockClasses : [];
  const workouts = demoMode ? mockWorkouts : [];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Corsi & Schede</h1>
          <p style={{ color: 'var(--text-muted)' }}>Gestisci il palinsesto corsi e le schede di allenamento.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert(`Nuovo ${activeTab === 'classes' ? 'Corso' : 'Scheda'}`)}>
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Nuovo {activeTab === 'classes' ? 'Corso' : 'Scheda'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
        <button 
          style={{ padding: '1rem', background: 'none', border: 'none', color: activeTab === 'classes' ? 'var(--accent-color)' : 'var(--text-muted)', borderBottom: activeTab === 'classes' ? '2px solid var(--accent-color)' : '2px solid transparent', fontWeight: 500, cursor: 'pointer' }}
          onClick={() => setActiveTab('classes')}
        >
          Palinsesto Corsi
        </button>
        <button 
          style={{ padding: '1rem', background: 'none', border: 'none', color: activeTab === 'workouts' ? 'var(--accent-color)' : 'var(--text-muted)', borderBottom: activeTab === 'workouts' ? '2px solid var(--accent-color)' : '2px solid transparent', fontWeight: 500, cursor: 'pointer' }}
          onClick={() => setActiveTab('workouts')}
        >
          Schede Allenamento
        </button>
      </div>

      <div className="card">
        {activeTab === 'classes' ? (
          classes.length > 0 ? (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Nome Corso</th>
                    <th>Istruttore</th>
                    <th>Durata</th>
                    <th>Capacità Max</th>
                    <th>Azioni</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map(c => (
                    <tr key={c.id}>
                      <td style={{ fontWeight: 500 }}>{c.name}</td>
                      <td>{c.instructor}</td>
                      <td>{c.duration}</td>
                      <td>{c.capacity} persone</td>
                      <td>
                        <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }} onClick={() => alert('Modifica corso')}>Modifica</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <Play className="empty-state-icon" />
              <h3>Nessun corso configurato</h3>
              <p style={{ marginTop: '0.5rem' }}>Crea il tuo primo corso per iniziare a ricevere prenotazioni.</p>
            </div>
          )
        ) : (
          workouts.length > 0 ? (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Nome Scheda</th>
                    <th>Livello</th>
                    <th>Esercizi</th>
                    <th>Azioni</th>
                  </tr>
                </thead>
                <tbody>
                  {workouts.map(w => (
                    <tr key={w.id}>
                      <td style={{ fontWeight: 500 }}>{w.name}</td>
                      <td>{w.level}</td>
                      <td>{w.exercises} esercizi</td>
                      <td>
                        <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }} onClick={() => alert('Modifica scheda')}>Modifica</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <Dumbbell className="empty-state-icon" />
              <h3>Nessuna scheda creata</h3>
              <p style={{ marginTop: '0.5rem' }}>Crea template di allenamento da assegnare ai tuoi clienti.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}