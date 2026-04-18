import React from 'react';
import { Shield, ShieldAlert, Radio, CheckCircle, Navigation } from 'lucide-react';
import { STAFF, AI_ALERTS } from '../data/mockData';
import './Components.css';

function Staff() {
  return (
    <div className="dashboard-grid">
      <div className="card" style={{ gridColumn: 'span 8', minHeight: '500px' }}>
        <div className="card-header">
          <div className="card-title"><Shield size={20} /> Active Staff Units</div>
        </div>
        <div className="staff-list">
          {STAFF.map(unit => (
            <div key={unit.id} className="staff-card glass-panel">
              <div className="staff-icon">
                 {unit.status === 'Active' ? <Radio size={24} color="var(--accent-success)" /> : 
                  unit.status === 'Dispatching' ? <Navigation size={24} color="var(--accent-warning)" /> :
                  <CheckCircle size={24} color="var(--text-secondary)" />}
              </div>
              <div className="staff-details">
                <h3>{unit.name}</h3>
                <p className="staff-location">Location: <strong>{unit.location}</strong></p>
              </div>
              <div className="staff-status">
                <span className={`status-badge stat-${unit.status.toLowerCase()}`}>{unit.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ gridColumn: 'span 4' }}>
         <div className="card-header">
          <div className="card-title"><ShieldAlert size={20} color="var(--accent-danger)" /> Dispatch Queue</div>
        </div>
        <div className="alert-list">
          {AI_ALERTS.filter(a => a.severity === 'high' || a.severity === 'medium').map((alert, idx) => (
             <div key={idx} className={`alert-item severity-${alert.severity}`} style={{ padding: '12px' }}>
               <div className="alert-content">
                  <div className="alert-title">{alert.title}</div>
                  <button className="dispatch-btn mt-2">Assign Team Options</button>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staff;
