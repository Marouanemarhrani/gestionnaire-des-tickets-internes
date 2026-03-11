import { useState } from 'react'

const STATUS_OPTIONS = [
  { value: 'open', label: 'Open' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'closed', label: 'Closed' },
]

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

const FILTER_OPTIONS = [
  { value: 'all', label: 'Tous' },
  { value: 'open', label: 'Open' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'closed', label: 'Closed' },
]

const PRIORITY_COLORS = {
  low: '#22c55e',
  medium: '#f97316',
  high: '#ef4444',
}

function App() {
  const [tickets, setTickets] = useState([])
  const [nextId, setNextId] = useState(1)
  const [filter, setFilter] = useState('all')
  const [form, setForm] = useState({
    titre: '',
    description: '',
    priorite: 'medium',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.titre.trim()) return
    const ticket = {
      id: nextId,
      titre: form.titre.trim(),
      description: form.description.trim(),
      priorite: form.priorite,
      statut: 'open',
      dateCreation: new Date().toISOString(),
    }
    setTickets((prev) => [...prev, ticket])
    setNextId((prev) => prev + 1)
    setForm({ titre: '', description: '', priorite: 'medium' })
  }

  const handleChangeStatut = (id, newStatut) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, statut: newStatut } : t))
    )
  }

  const handleDelete = (id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTickets =
    filter === 'all'
      ? tickets
      : tickets.filter((t) => t.statut === filter)

  const formatDate = (iso) => {
    const d = new Date(iso)
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .app { max-width: 900px; margin: 0 auto; padding: 24px; font-family: 'Segoe UI', system-ui, sans-serif; }
        h1 { margin: 0 0 24px; font-size: 1.75rem; color: #1e293b; }
        .form { background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #e2e8f0; }
        .form h2 { margin: 0 0 16px; font-size: 1.1rem; color: #475569; }
        .form-row { margin-bottom: 12px; }
        .form-row label { display: block; margin-bottom: 4px; font-weight: 500; color: #334155; font-size: 0.9rem; }
        .form-row input, .form-row select, .form-row textarea {
          width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem;
        }
        .form-row textarea { min-height: 80px; resize: vertical; }
        .btn { padding: 10px 18px; border: none; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; }
        .btn-primary { background: #3b82f6; color: white; }
        .btn-primary:hover { background: #2563eb; }
        .btn-danger { background: #ef4444; color: white; padding: 6px 12px; font-size: 0.85rem; }
        .btn-danger:hover { background: #dc2626; }
        .filters { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
        .filter-btn {
          padding: 8px 16px; border-radius: 8px; border: 1px solid #e2e8f0; background: white; font-weight: 500; cursor: pointer;
          color: #64748b;
        }
        .filter-btn:hover { background: #f1f5f9; color: #334155; }
        .filter-btn.active { background: #3b82f6; color: white; border-color: #3b82f6; }
        .cards { display: flex; flex-direction: column; gap: 16px; }
        .card {
          background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .card-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
        .card-title { margin: 0; font-size: 1.1rem; color: #1e293b; }
        .card-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
        .badge { padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; }
        .card-date { font-size: 0.85rem; color: #64748b; }
        .card-desc { font-size: 0.95rem; color: #475569; line-height: 1.5; margin-bottom: 12px; }
        .card-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .card-actions select { padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 0.9rem; }
        .empty { text-align: center; padding: 40px 20px; color: #64748b; background: #f8fafc; border-radius: 12px; border: 1px dashed #e2e8f0; }
      `}</style>

      <div className="app">
        <h1>Gestionnaire de tickets</h1>

        <form className="form" onSubmit={handleSubmit}>
          <h2>Nouveau ticket</h2>
          <div className="form-row">
            <label>Titre *</label>
            <input
              type="text"
              value={form.titre}
              onChange={(e) => setForm((f) => ({ ...f, titre: e.target.value }))}
              placeholder="Titre du ticket"
              required
            />
          </div>
          <div className="form-row">
            <label>Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="Description..."
            />
          </div>
          <div className="form-row">
            <label>Priorité</label>
            <select
              value={form.priorite}
              onChange={(e) => setForm((f) => ({ ...f, priorite: e.target.value }))}
            >
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Créer le ticket</button>
        </form>

        <div className="filters">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`filter-btn ${filter === opt.value ? 'active' : ''}`}
              onClick={() => setFilter(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="cards">
          {filteredTickets.length === 0 ? (
            <div className="empty">
              {tickets.length === 0
                ? 'Aucun ticket. Créez-en un ci-dessus.'
                : 'Aucun ticket pour ce filtre.'}
            </div>
          ) : (
            filteredTickets.map((ticket) => (
              <div key={ticket.id} className="card">
                <div className="card-header">
                  <h3 className="card-title">{ticket.titre}</h3>
                  <span
                    className="badge"
                    style={{ backgroundColor: PRIORITY_COLORS[ticket.priorite], color: 'white' }}
                  >
                    {PRIORITY_OPTIONS.find((p) => p.value === ticket.priorite)?.label ?? ticket.priorite}
                  </span>
                </div>
                <div className="card-meta">
                  <span className="card-date">Créé le {formatDate(ticket.dateCreation)}</span>
                </div>
                {ticket.description && (
                  <p className="card-desc">{ticket.description}</p>
                )}
                <div className="card-actions">
                  <select
                    value={ticket.statut}
                    onChange={(e) => handleChangeStatut(ticket.id, e.target.value)}
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default App
