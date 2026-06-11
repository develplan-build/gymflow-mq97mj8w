import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, UserPlus, MoreVertical } from 'lucide-react';
import { mockClients } from '../lib/mockData';

interface CRMProps {
  demoMode: boolean;
}

export function CRM({ demoMode }: CRMProps) {
  const [clients, setClients] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (demoMode) {
      setClients(mockClients);
    } else {
      setClients([]);
    }
  }, [demoMode]);

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newClient = {
      id: Date.now().toString(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      status: 'active',
      plan: formData.get('plan'),
      joinDate: new Date().toISOString().split('T')[0]
    };
    setClients([newClient, ...clients]);
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Clienti (CRM)</h1>
          <p style={{ color: 'var(--text-muted)' }}>Gestisci le anagrafiche e gli abbonamenti dei tuoi iscritti.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Nuovo Cliente
        </button>
      </div>

      <div className="card">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="form-control"
              placeholder="Cerca per nome o email..."
              style={{ paddingLeft: '3rem' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-outline">
            <Filter size={20} style={{ marginRight: '0.5rem' }} />
            Filtri
          </button>
        </div>

        {filteredClients.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Contatti</th>
                  <th>Piano</th>
                  <th>Stato</th>
                  <th>Iscrizione</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map(client => (
                  <tr key={client.id}>
                    <td style={{ fontWeight: 500 }}>{client.name}</td>
                    <td>
                      <div style={{ fontSize: '0.875rem' }}>{client.email}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{client.phone}</div>
                    </td>
                    <td>{client.plan}</td>
                    <td>
                      <span className={`badge ${client.status === 'active' ? 'badge-success' : client.status === 'inactive' ? 'badge-danger' : 'badge-warning'}`}>
                        {client.status === 'active' ? 'Attivo' : client.status === 'inactive' ? 'Inattivo' : 'In attesa'}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>{client.joinDate}</td>
                    <td>
                      <button className="icon-btn" onClick={() => alert(`Opzioni per ${client.name}`)}>
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <UserPlus className="empty-state-icon" />
            <h3>Nessun cliente trovato</h3>
            <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              {searchTerm ? 'Nessun risultato per la tua ricerca.' : 'Inizia aggiungendo il tuo primo cliente o attiva la modalità demo.'}
            </p>
            {!searchTerm && (
              <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
                Aggiungi Cliente
              </button>
            )}
          </div>
        )}
      </div>

      {showAddModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div className="card" style={{ width: '100%', maxWidth: '500px', margin: '1rem' }}>
            <h3 className="card-title">Aggiungi Nuovo Cliente</h3>
            <form onSubmit={handleAddClient}>
              <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input type="text" name="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Telefono</label>
                <input type="tel" name="phone" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Piano di Abbonamento</label>
                <select name="plan" className="form-control" required>
                  <option value="Starter Mensile">Starter Mensile</option>
                  <option value="Pro Mensile">Pro Mensile</option>
                  <option value="Pro Annuale">Pro Annuale</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowAddModal(false)}>Annulla</button>
                <button type="submit" className="btn btn-primary">Salva Cliente</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}