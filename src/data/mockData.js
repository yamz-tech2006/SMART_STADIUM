// Simulate realistic stadium data

export const STADIUM_SECTORS = [
  { id: 'S1', name: 'North Stand VIP', capacity: 1500, current: 1420 },
  { id: 'S2', name: 'North Stand Gen', capacity: 5000, current: 4800 },
  { id: 'S3', name: 'East Wing', capacity: 8000, current: 7200 },
  { id: 'S4', name: 'South Endzone', capacity: 6000, current: 5900 },
  { id: 'S5', name: 'West Wing', capacity: 8000, current: 6100 },
];

export const QUEUES = [
  { id: 'q1', type: 'Restroom', location: 'Gate A - North', waitTime: 4 }, // minutes
  { id: 'q2', type: 'Restroom', location: 'Gate C - South', waitTime: 12 },
  { id: 'q3', type: 'Concession', location: 'BurgerStand - East', waitTime: 25 },
  { id: 'q4', type: 'Concession', location: 'Drinks - West', waitTime: 8 },
  { id: 'q5', type: 'Merch', location: 'Main Store', waitTime: 18 },
];

export const AI_ALERTS = [
  { 
    id: 'a1', 
    severity: 'high', 
    title: 'Bottleneck Predicted: East Wing Exits',
    description: 'Current flow rate indicates a massive bottleneck at end of Q3. Suggest opening overflow gates E1-E3.',
    time: '2 mins ago'
  },
  { 
    id: 'a2', 
    severity: 'medium', 
    title: 'Concession Overload',
    description: 'BurgerStand - East queue exceeding 20m. Recommend dispatching mobile drink vendors to area.',
    time: '5 mins ago'
  },
  { 
    id: 'a3', 
    severity: 'low', 
    title: 'Restroom Availability',
    description: 'Gate A - North restrooms underutilized. Update digital signage to redirect traffic.',
    time: '12 mins ago'
  }
];

export const STAFF = [
  { id: 'st1', name: 'Security Team Alpha', location: 'North Stand', status: 'Active' },
  { id: 'st2', name: 'Medical Unit 1', location: 'West Wing', status: 'Standby' },
  { id: 'st3', name: 'Crowd Control B', location: 'South Endzone', status: 'Active' },
  { id: 'st4', name: 'Maintenance', location: 'East Wing', status: 'Dispatching' }
];

// Generate simple timeseries data for overall attendance graph
export const generateTimelineData = () => {
    const data = [];
    let current = 2000;
    for(let i=0; i<60; i++) {
        current += Math.floor(Math.random() * 500) - 100;
        data.push({
            time: `T-${60-i}m`,
            attendance: current,
            predicted: current + Math.floor(Math.random() * 200)
        });
    }
    return data;
}
