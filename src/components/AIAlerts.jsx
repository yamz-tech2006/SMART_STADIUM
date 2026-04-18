import React from 'react';
import { Bot, AlertCircle, Info, ChevronRight } from 'lucide-react';
import { AI_ALERTS } from '../data/mockData';
import './Components.css';

function AIAlerts() {
  const getIcon = (severity) => {
    switch(severity) {
      case 'high': return <AlertCircle size={20} color="var(--accent-danger)" />;
      case 'medium': return <AlertCircle size={20} color="var(--accent-warning)" />;
      case 'low': return <Info size={20} color="var(--accent-primary)" />;
      default: return <Bot size={20} />;
    }
  };

  return (
    <div className="alert-list">
      {AI_ALERTS.map(alert => (
        <div key={alert.id} className={`alert-item severity-${alert.severity}`}>
          <div className="alert-icon">
            {getIcon(alert.severity)}
          </div>
          <div className="alert-content">
            <div className="alert-header">
              <span className="alert-title">{alert.title}</span>
              <span className="alert-time">{alert.time}</span>
            </div>
            <p className="alert-desc">{alert.description}</p>
            <button className="alert-action">
              Resolve Issue <ChevronRight size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AIAlerts;
