// CityFix Demo Data
const DEPARTMENTS = [
  'Water Supply', 'Roads & Infrastructure', 'Electricity', 'Sanitation',
  'Public Health', 'Education', 'Transport', 'Housing', 'Parks & Recreation', 'Fire Safety'
];

const STATUSES = ['Pending', 'In Progress', 'Resolved', 'Rejected'];

const DEMO_COMPLAINTS = [
  { id: 'CF-1001', title: 'Water pipeline leakage on MG Road', citizen: 'Rahul Sharma', citizenId: 'CIT-001', department: 'Water Supply', status: 'Pending', priority: 'High', date: '2026-03-13', description: 'Major water pipeline leakage causing road flooding near MG Road junction.' },
  { id: 'CF-1002', title: 'Pothole on NH-48 near toll plaza', citizen: 'Priya Patel', citizenId: 'CIT-002', department: 'Roads & Infrastructure', status: 'In Progress', priority: 'High', date: '2026-03-12', description: 'Large pothole causing accidents near the toll plaza.' },
  { id: 'CF-1003', title: 'Street light not working in Sector 5', citizen: 'Amit Kumar', citizenId: 'CIT-003', department: 'Electricity', status: 'Resolved', priority: 'Medium', date: '2026-03-11', description: 'Multiple street lights not working in residential area.' },
  { id: 'CF-1004', title: 'Garbage not collected for 3 days', citizen: 'Sneha Reddy', citizenId: 'CIT-004', department: 'Sanitation', status: 'Pending', priority: 'High', date: '2026-03-13', description: 'Garbage bins overflowing in Block B residential area.' },
  { id: 'CF-1005', title: 'Broken water meter', citizen: 'Vikram Singh', citizenId: 'CIT-005', department: 'Water Supply', status: 'In Progress', priority: 'Low', date: '2026-03-10', description: 'Water meter showing incorrect readings.' },
  { id: 'CF-1006', title: 'Road caved in after rain', citizen: 'Neha Gupta', citizenId: 'CIT-006', department: 'Roads & Infrastructure', status: 'Pending', priority: 'Critical', date: '2026-03-13', description: 'Road has caved in near the school zone after heavy rainfall.' },
  { id: 'CF-1007', title: 'Power outage in Industrial Area', citizen: 'Rajesh Nair', citizenId: 'CIT-007', department: 'Electricity', status: 'Resolved', priority: 'High', date: '2026-03-09', description: 'Frequent power cuts affecting industrial production.' },
  { id: 'CF-1008', title: 'Sewage overflow on Main Street', citizen: 'Anita Desai', citizenId: 'CIT-008', department: 'Sanitation', status: 'In Progress', priority: 'Critical', date: '2026-03-12', description: 'Sewage overflowing onto the main commercial street.' },
  { id: 'CF-1009', title: 'Hospital equipment shortage', citizen: 'Dr. Suresh Menon', citizenId: 'CIT-009', department: 'Public Health', status: 'Pending', priority: 'High', date: '2026-03-11', description: 'City hospital running low on essential medical equipment.' },
  { id: 'CF-1010', title: 'School building roof leaking', citizen: 'Kavita Joshi', citizenId: 'CIT-010', department: 'Education', status: 'Pending', priority: 'Medium', date: '2026-03-10', description: 'Government school roof leaking during monsoon season.' },
  { id: 'CF-1011', title: 'Bus route #42 frequency reduced', citizen: 'Manoj Tiwari', citizenId: 'CIT-011', department: 'Transport', status: 'Resolved', priority: 'Medium', date: '2026-03-08', description: 'Public bus route frequency has been significantly reduced.' },
  { id: 'CF-1012', title: 'Illegal construction in Zone C', citizen: 'Deepa Chauhan', citizenId: 'CIT-012', department: 'Housing', status: 'In Progress', priority: 'High', date: '2026-03-07', description: 'Unauthorized construction activity in residential zone.' },
  { id: 'CF-1013', title: 'Park playground equipment broken', citizen: 'Arjun Mehta', citizenId: 'CIT-013', department: 'Parks & Recreation', status: 'Pending', priority: 'Low', date: '2026-03-13', description: 'Childrens playground equipment in Central Park is damaged.' },
  { id: 'CF-1014', title: 'Fire hydrant not functional', citizen: 'Sanjay Kapoor', citizenId: 'CIT-014', department: 'Fire Safety', status: 'In Progress', priority: 'Critical', date: '2026-03-12', description: 'Fire hydrant near commercial complex is non-functional.' },
  { id: 'CF-1015', title: 'Contaminated water supply', citizen: 'Meera Iyer', citizenId: 'CIT-015', department: 'Water Supply', status: 'Pending', priority: 'Critical', date: '2026-03-13', description: 'Residents reporting contaminated water in East Block.' },
  { id: 'CF-1016', title: 'Traffic signal malfunction', citizen: 'Rohit Verma', citizenId: 'CIT-016', department: 'Roads & Infrastructure', status: 'Resolved', priority: 'High', date: '2026-03-06', description: 'Traffic signal at main intersection not working properly.' },
  { id: 'CF-1017', title: 'Transformer explosion in Sector 9', citizen: 'Pooja Agarwal', citizenId: 'CIT-017', department: 'Electricity', status: 'Resolved', priority: 'Critical', date: '2026-03-05', description: 'Electrical transformer exploded causing blackout in entire sector.' },
  { id: 'CF-1018', title: 'Stray animal menace', citizen: 'Kiran Rao', citizenId: 'CIT-018', department: 'Public Health', status: 'Pending', priority: 'Medium', date: '2026-03-09', description: 'Increasing stray dog population causing safety concerns.' },
];

const DEMO_OFFICERS = [
  { id: 'OFF-001', name: 'Sunil Verma', email: 'sunil.v@cityfix.gov', phone: '9876543210', department: 'Water Supply', designation: 'Senior Inspector', status: 'Active', joinDate: '2024-01-15', casesHandled: 45, casesResolved: 38 },
  { id: 'OFF-002', name: 'Rekha Sharma', email: 'rekha.s@cityfix.gov', phone: '9876543211', department: 'Roads & Infrastructure', designation: 'Chief Engineer', status: 'Active', joinDate: '2023-06-20', casesHandled: 62, casesResolved: 55 },
  { id: 'OFF-003', name: 'Anil Kumar', email: 'anil.k@cityfix.gov', phone: '9876543212', department: 'Electricity', designation: 'Line Inspector', status: 'On Leave', joinDate: '2024-03-10', casesHandled: 30, casesResolved: 24 },
  { id: 'OFF-004', name: 'Fatima Begum', email: 'fatima.b@cityfix.gov', phone: '9876543213', department: 'Sanitation', designation: 'Sanitation Officer', status: 'Active', joinDate: '2023-11-05', casesHandled: 58, casesResolved: 50 },
  { id: 'OFF-005', name: 'Ravi Prasad', email: 'ravi.p@cityfix.gov', phone: '9876543214', department: 'Public Health', designation: 'Health Inspector', status: 'Active', joinDate: '2024-05-18', casesHandled: 25, casesResolved: 20 },
  { id: 'OFF-006', name: 'Geeta Nair', email: 'geeta.n@cityfix.gov', phone: '9876543215', department: 'Education', designation: 'Education Officer', status: 'On Leave', joinDate: '2023-09-01', casesHandled: 35, casesResolved: 30 },
  { id: 'OFF-007', name: 'Mohit Saxena', email: 'mohit.s@cityfix.gov', phone: '9876543216', department: 'Transport', designation: 'Transport Inspector', status: 'Active', joinDate: '2024-02-28', casesHandled: 40, casesResolved: 33 },
  { id: 'OFF-008', name: 'Lakshmi Devi', email: 'lakshmi.d@cityfix.gov', phone: '9876543217', department: 'Housing', designation: 'Housing Inspector', status: 'Active', joinDate: '2023-08-14', casesHandled: 48, casesResolved: 42 },
  { id: 'OFF-009', name: 'Prakash Jha', email: 'prakash.j@cityfix.gov', phone: '9876543218', department: 'Parks & Recreation', designation: 'Park Supervisor', status: 'Active', joinDate: '2024-07-01', casesHandled: 18, casesResolved: 15 },
  { id: 'OFF-010', name: 'Sunita Yadav', email: 'sunita.y@cityfix.gov', phone: '9876543219', department: 'Fire Safety', designation: 'Fire Officer', status: 'On Leave', joinDate: '2023-12-20', casesHandled: 22, casesResolved: 19 },
];

const DEMO_CITIZENS = [
  { id: 'CIT-001', name: 'Rahul Sharma', email: 'rahul.sharma@gmail.com', phone: '9001234567', address: '12, MG Road, Sector 3', totalComplaints: 3, joinDate: '2025-06-15' },
  { id: 'CIT-002', name: 'Priya Patel', email: 'priya.patel@gmail.com', phone: '9001234568', address: '45, NH-48, Block A', totalComplaints: 2, joinDate: '2025-07-20' },
  { id: 'CIT-003', name: 'Amit Kumar', email: 'amit.kumar@gmail.com', phone: '9001234569', address: '78, Sector 5, Lane 3', totalComplaints: 5, joinDate: '2025-05-10' },
  { id: 'CIT-004', name: 'Sneha Reddy', email: 'sneha.reddy@gmail.com', phone: '9001234570', address: '23, Block B, Residential Area', totalComplaints: 1, joinDate: '2025-09-01' },
  { id: 'CIT-005', name: 'Vikram Singh', email: 'vikram.singh@gmail.com', phone: '9001234571', address: '56, Main Market, Zone A', totalComplaints: 4, joinDate: '2025-04-25' },
  { id: 'CIT-006', name: 'Neha Gupta', email: 'neha.gupta@gmail.com', phone: '9001234572', address: '89, School Road, Sector 7', totalComplaints: 2, joinDate: '2025-08-12' },
  { id: 'CIT-007', name: 'Rajesh Nair', email: 'rajesh.nair@gmail.com', phone: '9001234573', address: '34, Industrial Area, Phase 2', totalComplaints: 3, joinDate: '2025-03-18' },
  { id: 'CIT-008', name: 'Anita Desai', email: 'anita.desai@gmail.com', phone: '9001234574', address: '67, Commercial Street', totalComplaints: 1, joinDate: '2025-10-05' },
  { id: 'CIT-009', name: 'Dr. Suresh Menon', email: 'suresh.menon@gmail.com', phone: '9001234575', address: '12, Hospital Road', totalComplaints: 2, joinDate: '2025-02-14' },
  { id: 'CIT-010', name: 'Kavita Joshi', email: 'kavita.joshi@gmail.com', phone: '9001234576', address: '90, Education Lane, Block C', totalComplaints: 1, joinDate: '2025-11-20' },
  { id: 'CIT-011', name: 'Manoj Tiwari', email: 'manoj.tiwari@gmail.com', phone: '9001234577', address: '45, Bus Stand Road', totalComplaints: 3, joinDate: '2025-01-08' },
  { id: 'CIT-012', name: 'Deepa Chauhan', email: 'deepa.chauhan@gmail.com', phone: '9001234578', address: '78, Zone C, Residential', totalComplaints: 1, joinDate: '2025-07-30' },
];

const DEMO_OFFICER_REQUESTS = [
  { id: 'REQ-001', name: 'Ajay Mishra', email: 'ajay.m@gmail.com', phone: '9112345678', department: 'Water Supply', designation: 'Junior Inspector', experience: '3 years', qualification: 'B.Tech Civil Engineering', requestDate: '2026-03-12', status: 'Pending' },
  { id: 'REQ-002', name: 'Divya Krishnan', email: 'divya.k@gmail.com', phone: '9112345679', department: 'Electricity', designation: 'Electrical Inspector', experience: '5 years', qualification: 'B.Tech Electrical Engineering', requestDate: '2026-03-11', status: 'Pending' },
  { id: 'REQ-003', name: 'Farhan Ali', email: 'farhan.a@gmail.com', phone: '9112345680', department: 'Public Health', designation: 'Health Officer', experience: '4 years', qualification: 'MBBS, MPH', requestDate: '2026-03-10', status: 'Pending' },
  { id: 'REQ-004', name: 'Gayatri Pillai', email: 'gayatri.p@gmail.com', phone: '9112345681', department: 'Education', designation: 'Education Inspector', experience: '6 years', qualification: 'M.Ed, B.Ed', requestDate: '2026-03-09', status: 'Pending' },
];

// Helper functions
function getStatusColor(status) {
  switch(status) {
    case 'Pending': return '#f97316';
    case 'In Progress': return '#3b82f6';
    case 'Resolved': return '#22c55e';
    case 'Rejected': return '#ef4444';
    default: return '#64748b';
  }
}

function getPriorityColor(priority) {
  switch(priority) {
    case 'Critical': return '#ef4444';
    case 'High': return '#f97316';
    case 'Medium': return '#eab308';
    case 'Low': return '#22c55e';
    default: return '#64748b';
  }
}

function filterByTime(items, dateField, filter) {
  const now = new Date('2026-03-13');
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return items.filter(item => {
    const d = new Date(item[dateField]);
    switch(filter) {
      case 'today': return d >= today;
      case 'this-week': { const w = new Date(today); w.setDate(w.getDate()-7); return d >= w; }
      case 'this-month': return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      case 'last-6-months': { const m = new Date(today); m.setMonth(m.getMonth()-6); return d >= m; }
      case 'this-year': case 'last-year': return d.getFullYear() === now.getFullYear();
      default: return true;
    }
  });
}
