import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, CheckCircle2, Users, Calendar, BarChart3, CreditCard, Sun, Moon } from 'lucide-react';

interface LandingProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Landing({ theme, toggleTheme }: LandingProps) {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <div className="container">
        <nav className="landing-nav">
          <div className="landing-logo">
            <Dumbbell size={32} />
            <span>GymFlow</span>
          </div>
          <div className="landing-links">
            <button onClick={() => scrollToSection('features')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1rem', fontWeight: 500 }}>Funzionalità</button>
            <button onClick={() => scrollToSection('pricing')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1rem', fontWeight: 500 }}>Prezzi</button>
            <button onClick={toggleTheme} className="icon-btn">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/app/dashboard')}>
            Accedi all'App
          </button>
        </nav>

        <main>
          <section className="hero-section">
            <h1 className="hero-title">Gestisci la tua palestra con un'unica piattaforma</h1>
            <p className="hero-subtitle">
              GymFlow è il software gestionale completo per palestre, centri fitness e personal trainer. 
              CRM, prenotazioni, fatturazione e schede di allenamento in un'unica soluzione elegante.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/app/dashboard')} style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Inizia Ora (Demo)
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('features')} style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Scopri di più
              </button>
            </div>
          </section>
        </main>
      </div>

      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Tutto ciò che ti serve</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Users size={24} /></div>
              <h3>CRM Avanzato</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Gestisci anagrafiche, abbonamenti, certificati medici e scadenze in modo semplice e intuitivo.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Calendar size={24} /></div>
              <h3>Prenotazioni Smart</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Calendario interattivo per corsi, lezioni private e gestione delle sale con liste d'attesa automatiche.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><CreditCard size={24} /></div>
              <h3>Fatturazione & Pagamenti</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Integrazione con Stripe per pagamenti ricorrenti, emissione ricevute e controllo insoluti.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Dumbbell size={24} /></div>
              <h3>Schede Allenamento</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Crea e assegna schede personalizzate con libreria esercizi e monitoraggio dei progressi.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BarChart3 size={24} /></div>
              <h3>Report & Analisi</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Dashboard statistiche per monitorare presenze, fatturato, tassi di rinnovo e KPI del tuo centro.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><CheckCircle2 size={24} /></div>
              <h3>Automazioni</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Email e notifiche automatiche per scadenze abbonamenti, auguri di compleanno e promemoria.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Piani Semplici e Trasparenti</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Per personal trainer e piccoli studi</p>
              <div className="price">€49<span>/mese</span></div>
              <ul className="pricing-features">
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Fino a 100 clienti attivi</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Gestione prenotazioni</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Schede allenamento base</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Supporto via email</li>
              </ul>
              <button className="btn btn-outline" style={{ marginTop: 'auto' }} onClick={() => navigate('/app/dashboard')}>Inizia Prova Gratuita</button>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">Più Scelto</div>
              <h3>Pro</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Per palestre e centri fitness strutturati</p>
              <div className="price">€99<span>/mese</span></div>
              <ul className="pricing-features">
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Clienti illimitati</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Fatturazione e pagamenti Stripe</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> App per i clienti (iOS/Android)</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Automazioni marketing</li>
                <li><CheckCircle2 size={20} color="var(--accent-color)" /> Supporto prioritario</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: 'auto' }} onClick={() => navigate('/app/dashboard')}>Inizia Prova Gratuita</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Dumbbell size={24} color="var(--accent-color)" />
            <span style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-color)' }}>GymFlow</span>
          </div>
          <p>© {new Date().getFullYear()} GymFlow. Tutti i diritti riservati.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Prodotto Demo - Dati Locali</p>
        </div>
      </footer>
    </div>
  );
}