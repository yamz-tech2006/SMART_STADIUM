import React from 'react';
import StadiumMap from './StadiumMap';
import { STADIUM_SECTORS } from '../data/mockData';
import './Components.css';

function CrowdDensity() {
  return (
    <div className="dashboard-grid">
      <div className="card" style={{ gridColumn: 'span 12', minHeight: '600px' }}>
        <div className="card-header">
           <div className="card-title">Detailed Sector Analysis</div>
        </div>
        <div style={{ display: 'flex', height: '100%', gap: '24px' }}>
           <div style={{ flex: 2, borderRight: '1px solid var(--panel-border)', paddingRight: '24px' }}>
             <StadiumMap />
           </div>
           <div style={{ flex: 1 }}>
             <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Sector Stats</h3>
             <div className="sector-list">
               {STADIUM_SECTORS.map(s => {
                 const density = (s.current / s.capacity) * 100;
                 return (
                   <div key={s.id} className="sector-stat-card glass-panel" style={{ marginBottom: '12px', padding: '12px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                       <strong>{s.name}</strong>
                       <span style={{ color: density > 90 ? 'var(--accent-danger)' : density > 70 ? 'var(--accent-warning)' : 'var(--accent-success)'}}>
                         {density.toFixed(1)}%
                       </span>
                     </div>
                     <div className="queue-bar-container">
                        <div className="queue-bar-fill" style={{ 
                          width: `${density}%`, 
                          backgroundColor: density > 90 ? 'var(--accent-danger)' : density > 70 ? 'var(--accent-warning)' : 'var(--accent-success)' 
                        }} />
                     </div>
                     <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                       {s.current.toLocaleString()} / {s.capacity.toLocaleString()} Pax
                     </div>
                   </div>
                 )
               })}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default CrowdDensity;
