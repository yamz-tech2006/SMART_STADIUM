import React from 'react';
import { Clock, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { QUEUES } from '../data/mockData';
import './Components.css';

function Queues() {
  return (
    <div className="dashboard-grid">
      <div className="card" style={{ gridColumn: 'span 12' }}>
        <div className="card-header">
          <div className="card-title">Live Facility Queues</div>
          <button className="icon-btn" style={{ width: 32, height: 32 }}>
            <RefreshCw size={16} />
          </button>
        </div>
        
        <div className="queues-list">
          {QUEUES.map((q) => (
            <div key={q.id} className="queue-card glass-panel">
              <div className="queue-info">
                <h3>{q.location}</h3>
                <span className="queue-type">{q.type}</span>
              </div>
              <div className="queue-metrics">
                <div className="queue-time">
                  <Clock size={20} color={q.waitTime > 15 ? "var(--accent-danger)" : q.waitTime > 8 ? "var(--accent-warning)" : "var(--accent-success)"} />
                  <span style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: q.waitTime > 15 ? "var(--accent-danger)" : "var(--text-primary)"
                  }}>
                    {q.waitTime}m
                  </span>
                </div>
                <div className="queue-trend">
                  {Math.random() > 0.5 ? 
                    <><TrendingUp size={16} color="var(--accent-danger)"/> Rising</> : 
                    <><TrendingDown size={16} color="var(--accent-success)"/> Falling</>
                  }
                </div>
              </div>
              
              {/* Progress Bar simulation */}
              <div className="queue-bar-container">
                <div 
                  className="queue-bar-fill" 
                  style={{
                    width: `${Math.min((q.waitTime / 30) * 100, 100)}%`,
                    backgroundColor: q.waitTime > 15 ? "var(--accent-danger)" : q.waitTime > 8 ? "var(--accent-warning)" : "var(--accent-success)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queues;
