import React from 'react';
import StadiumMap from './StadiumMap';
import AIAlerts from './AIAlerts';
import MetricsDash from './MetricsDash';
import { generateTimelineData } from '../data/mockData';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from 'recharts';

function DashboardOverview() {
  const timelineData = generateTimelineData();

  return (
    <div className="dashboard-grid">
      {/* Top row: Metrics */}
      <div style={{ gridColumn: 'span 12' }}>
        <MetricsDash />
      </div>

      {/* Middle row: Map and Alerts */}
      <div className="card" style={{ gridColumn: 'span 8', minHeight: '400px' }}>
        <div className="card-header">
          <div className="card-title">Live Stadium Density Heatmap</div>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <StadiumMap />
        </div>
      </div>

      <div className="card" style={{ gridColumn: 'span 4' }}>
        <div className="card-header">
          <div className="card-title" style={{ color: 'var(--accent-warning)' }}>
            AI Recommendations
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <AIAlerts />
        </div>
      </div>

      {/* Bottom row: Trend graph */}
      <div className="card" style={{ gridColumn: 'span 12', height: '300px' }}>
        <div className="card-header">
          <div className="card-title">Attendance & Flow Prediction</div>
        </div>
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-warning)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--accent-warning)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" stroke="var(--text-secondary)" />
              <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--app-bg)', border: '1px solid var(--panel-border)', borderRadius: '8px' }}
              />
              <Area type="monotone" dataKey="attendance" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorAttendance)" />
              <Area type="monotone" dataKey="predicted" stroke="var(--accent-warning)" fillOpacity={1} fill="url(#colorPredicted)" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
