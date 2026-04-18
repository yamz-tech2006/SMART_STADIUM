import React from 'react';
import { Users, AlertTriangle, Timer, Activity } from 'lucide-react';
import './Components.css';

function MetricsDash() {
  const metrics = [
    {
      title: "Total Attendance",
      value: "54,230",
      change: "+1,200/hr",
      icon: <Users size={24} color="var(--accent-primary)" />,
      trend: "up"
    },
    {
      title: "Avg Wait Time",
      value: "14m",
      change: "-2m since last hr",
      icon: <Timer size={24} color="var(--accent-success)" />,
      trend: "down"
    },
    {
      title: "Active Incidents",
      value: "3",
      change: "2 Critical",
      icon: <AlertTriangle size={24} color="var(--accent-danger)" />,
      trend: "up"
    },
    {
      title: "Flow Rate",
      value: "Level 4",
      change: "Moderate",
      icon: <Activity size={24} color="var(--accent-warning)" />,
      trend: "stable"
    }
  ];

  return (
    <div className="metrics-container">
      {metrics.map((m, idx) => (
        <div key={idx} className="metric-card glass-panel">
          <div className="metric-header">
            <span className="metric-title">{m.title}</span>
            <div className="metric-icon-wrapper">
              {m.icon}
            </div>
          </div>
          <div className="metric-value">{m.value}</div>
          <div className={`metric-change ${m.trend === 'down' && m.title !== 'Active Incidents' ? 'positive' : m.trend === 'up' && m.title === 'Active Incidents' ? 'negative' : 'neutral'}`}>
            {m.change}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MetricsDash;
