import React, { useState } from 'react';
import './App.css';
import { LayoutDashboard, Users, Clock, ShieldAlert, Settings, Bell } from 'lucide-react';
import DashboardOverview from './components/DashboardOverview';
import Queues from './components/Queues';
import CrowdDensity from './components/CrowdDensity';
import Staff from './components/Staff';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar glass-panel">
        <div className="logo-container">
          <div className="logo-icon">
            <LayoutDashboard size={24} color="white" />
          </div>
          <h2>SmartFlow</h2>
        </div>
        
        <nav className="nav-menu">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={20} />
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'queues' ? 'active' : ''}`}
            onClick={() => setActiveTab('queues')}
          >
            <Clock size={20} />
            Queue Status
          </button>
          <button 
            className={`nav-item ${activeTab === 'crowd' ? 'active' : ''}`}
            onClick={() => setActiveTab('crowd')}
          >
            <Users size={20} />
            Crowd Density
          </button>
          <button 
            className={`nav-item ${activeTab === 'staff' ? 'active' : ''}`}
            onClick={() => setActiveTab('staff')}
          >
            <ShieldAlert size={20} />
            Staff & Alerts
          </button>
        </nav>

        <div className="sidebar-bottom">
           <button className="nav-item">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="topbar glass-panel">
          <div className="page-title">
            <h1>Command Center</h1>
            <span className="live-indicator">
              <span className="pulse-dot"></span> LIVE
            </span>
          </div>
          <div className="topbar-actions">
            <div className="system-health">
               Status: <span style={{color: 'var(--accent-success)'}}>Optimal</span>
            </div>
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge">3</span>
            </button>
            <div className="user-profile">
              <div className="avatar">JD</div>
            </div>
          </div>
        </header>
        
        <div className="content-scroll">
          {activeTab === 'overview' && <DashboardOverview />}
          {activeTab === 'queues' && <Queues />}
          {activeTab === 'crowd' && <CrowdDensity />}
          {activeTab === 'staff' && <Staff />}
          
          {/* Fallback for undefined tabs */}
          {!['overview', 'queues', 'crowd', 'staff'].includes(activeTab) && (
            <div className="placeholder-view">
              <h2>Module incoming in next phase...</h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
