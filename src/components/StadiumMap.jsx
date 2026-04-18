import React, { useState, useEffect } from 'react';
import { STADIUM_SECTORS } from '../data/mockData';
import './Components.css';

function StadiumMap() {
  const [activeSector, setActiveSector] = useState(null);
  const [sectors, setSectors] = useState(STADIUM_SECTORS);

  // Simulate real-time data changes slightly
  useEffect(() => {
    const interval = setInterval(() => {
      setSectors(prev => prev.map(s => {
        // Random fluctuation between -50 and +50
        const change = Math.floor(Math.random() * 101) - 50;
        let newCurrent = s.current + change;
        if (newCurrent > s.capacity) newCurrent = s.capacity;
        if (newCurrent < 0) newCurrent = 0;
        return { ...s, current: newCurrent };
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getHeatColor = (current, capacity) => {
    const ratio = current / capacity;
    if (ratio > 0.9) return "rgba(239, 68, 68, 0.8)"; // Red (Danger)
    if (ratio > 0.7) return "rgba(245, 158, 11, 0.8)"; // Yellow (Warning)
    return "rgba(16, 185, 129, 0.6)"; // Green (Good)
  };

  return (
    <div className="stadium-map-container">
      <svg 
        viewBox="0 0 800 600" 
        style={{ width: '100%', height: '100%', dropShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}
      >
        {/* Background Field */}
        <rect x="250" y="200" width="300" height="200" rx="20" fill="#1e293b" stroke="#334155" strokeWidth="4" />
        <line x1="400" y1="200" x2="400" y2="400" stroke="#334155" strokeWidth="2" />
        <circle cx="400" cy="300" r="30" fill="transparent" stroke="#334155" strokeWidth="2" />

        {/* Sectors Layout */}
        <g 
          className="sector S1 S2" 
          fill={getHeatColor(sectors[0].current + sectors[1].current, sectors[0].capacity + sectors[1].capacity)}
          stroke="var(--panel-border)"
          onMouseEnter={() => setActiveSector(sectors[1])}
          onMouseLeave={() => setActiveSector(null)}
          style={{ transition: 'all 0.5s ease', cursor: 'pointer' }}
        >
          {/* North Stand */}
          <path d="M 200 150 Q 400 50 600 150 L 550 180 Q 400 100 250 180 Z" />
        </g>

        <g 
          className="sector S4" 
          fill={getHeatColor(sectors[3].current, sectors[3].capacity)}
          stroke="var(--panel-border)"
          onMouseEnter={() => setActiveSector(sectors[3])}
          onMouseLeave={() => setActiveSector(null)}
          style={{ transition: 'all 0.5s ease', cursor: 'pointer' }}
        >
          {/* South Stand */}
          <path d="M 200 450 Q 400 550 600 450 L 550 420 Q 400 500 250 420 Z" />
        </g>

        <g 
          className="sector S3" 
          fill={getHeatColor(sectors[2].current, sectors[2].capacity)}
          stroke="var(--panel-border)"
          onMouseEnter={() => setActiveSector(sectors[2])}
          onMouseLeave={() => setActiveSector(null)}
          style={{ transition: 'all 0.5s ease', cursor: 'pointer' }}
        >
          {/* East Wing */}
          <path d="M 640 180 Q 750 300 640 420 L 580 390 Q 650 300 580 210 Z" />
        </g>

        <g 
          className="sector S5" 
          fill={getHeatColor(sectors[4].current, sectors[4].capacity)}
          stroke="var(--panel-border)"
          onMouseEnter={() => setActiveSector(sectors[4])}
          onMouseLeave={() => setActiveSector(null)}
          style={{ transition: 'all 0.5s ease', cursor: 'pointer' }}
        >
          {/* West Wing */}
          <path d="M 160 180 Q 50 300 160 420 L 220 390 Q 150 300 220 210 Z" />
        </g>
      </svg>

      {/* Tooltip Overlay */}
      {activeSector && (
        <div className="sector-tooltip glass-panel">
          <h4>{activeSector.name}</h4>
          <div className="tooltip-stat">
            <span>Occupancy:</span> 
            <strong>{activeSector.current.toLocaleString()} / {activeSector.capacity.toLocaleString()}</strong>
          </div>
          <div className="tooltip-stat">
            <span>Density:</span>
            <strong>{((activeSector.current / activeSector.capacity) * 100).toFixed(1)}%</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default StadiumMap;
