import React from 'react';
import { FileText, Upload, File } from 'lucide-react';

interface DocumentsProps {
  demoMode: boolean;
}

export function Documents({ demoMode }: DocumentsProps) {
  const mockDocs = [
    { id: 1, name: 'Regolamento_Palestra.pdf', type: 'PDF', size: '2.4 MB', date: '2023-01-10' },
    { id: 2, name: 'Modulo_Iscrizione_Vuoto.docx', type: 'DOCX', size: '1.1 MB', date: '2023-02-15' },
    { id: 3, name: 'Certificati_Medici_Scaduti_Ottobre.xlsx', type: 'XLSX', size: '0.5 MB', date: '2023-10-01' },
  ];

  const docs = demoMode ? mockDocs : [];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Documenti</h1>
          <p style={{ color: 'var(--text-muted)' }}>Archivio file, contratti e moduli.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Apertura selettore file...')}>
          <Upload size={20} style={{ marginRight: '0.5rem' }} />
          Carica Documento
        </button>
      </div>

      <div className="card">
        {docs.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nome File</th>
                  <th>Tipo</th>
                  <th>Dimensione</th>
                  <th>Data Caricamento</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {docs.map(doc => (
                  <tr key={doc.id}>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                      <File size={16} color="var(--text-muted)" />
                      {doc.name}
                    </td>
                    <td>{doc.type}</td>
                    <td>{doc.size}</td>
                    <td>{doc.date}</td>
                    <td>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }} onClick={() => alert(`Download ${doc.name}`)}>Scarica</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <FileText className="empty-state-icon" />
            <h3>Nessun documento</h3>
            <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>L'archivio documenti è vuoto.</p>
            <button className="btn btn-outline" onClick={() => alert('Apertura selettore file...')}>
              Carica il primo file
            </button>
          </div>
        )}
      </div>
    </div>
  );
}