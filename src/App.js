
// src/App.js
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'; // Ensure the path is correct
import RecentOrders from './Components/RecentOrders';
import 'bootstrap-icons/font/bootstrap-icons.css';
const App = () => {
  return (
    <div className="app">
      {/* <Dashboard /> */}
      <RecentOrders />
    </div>
  );
};


// const App = () => {
//   return (
//     <div className="dashboard">
//       <div className="header">
//         <input type="text" placeholder="Search" className="search-bar" />
//         <div className="user-info">
//           <img src="user-avatar.jpg" alt="User Avatar" className="user-avatar" />
//         </div>
//       </div>
//       <div className="content">
//         <div className="stats">
//           <div className="stat">
//             <div className="label">Total Orders</div>
//             <div className="value">75</div>
//           </div>
//           <div className="stat">
//             <div className="label">Total Delivered</div>
//             <div className="value">70</div>
//           </div>
//           <div className="stat">
//             <div className="label">Total Cancelled</div>
//             <div className="value">05</div>
//           </div>
//           <div className="stat">
//             <div className="label">Total Revenue</div>
//             <div className="value">$12k</div>
//           </div>
//           <div className="stat">
//             <div className="label">Net Profit</div>
//             <div className="value">$6759.25</div>
//           </div>
//         </div>
//         <div className="activity">
//           <h2>Activity</h2>
//           <div className="activity-chart">
//             {/* Add your chart library here */}
//           </div>
//         </div>
//         <div className="recent-orders">
//           <h2>Recent Orders</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Customer</th>
//                 <th>Order No.</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Wade Warren</td>
//                 <td>15478256</td>
//                 <td>$124.00</td>
//                 <td>Delivered</td>
//               </tr>
//               <tr>
//                 <td>Jane Cooper</td>
//                 <td>48967586</td>
//                 <td>$305.02</td>
//                 <td>Delivered</td>
//               </tr>
//               <tr>
//                 <td>Guy Hawkins</td>
//                 <td>78985215</td>
//                 <td>$45.88</td>
//                 <td>Cancelled</td>
//               </tr>
//               <tr>
//                 <td>Kristin Watson</td>
//                 <td>20965732</td>
//                 <td>$65.00</td>
//                 <td>Pending</td>
//               </tr>
//               <tr>
//                 <td>Cody Fisher</td>
//                 <td>95715620</td>
//                 <td>$545.00</td>
//                 <td>Delivered</td>
//               </tr>
//               <tr>
//                 <td>Savannah Nguyen</td>
//                 <td>78514568</td>
//                 <td>$128.20</td>
//                 <td>Delivered</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="feedback">
//           <h2>Customer's Feedback</h2>
//           <div className="feedback-list">
//             <div className="feedback-item">
//               <h3>Jenny Wilson</h3>
//               <p>⭐⭐⭐⭐⭐</p>
//               <p>The food was excellent and so was the service...</p>
//             </div>
//             <div className="feedback-item">
//               <h3>Dianne Russell</h3>
//               <p>⭐⭐⭐⭐⭐</p>
//               <p>We enjoyed the Eggs Benedict served on homemade...</p>
//             </div>
//             <div className="feedback-item">
//               <h3>Devon Lane</h3>
//               <p>⭐⭐⭐⭐⭐</p>
//               <p>Normally we are wings fans, but theirs are lean...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// function App() {
//   return (
//     <div className="dashboard">
//       <div className="top-section">
//         <MetricsSection />  {/* Use MetricsSection here */}
//         <div className="activity-chart">
//           {/* Chart component */}
//         </div>
//       </div>
//       <div className="bottom-section">
//         <div className="recent-orders">
//           {/* Table component */}
//         </div>
//         <div className="goals">
//           {/* Goals section */}
//         </div>
//         <div className="customer-feedback">
//           {/* Feedback section */}
//         </div>
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="dashboard">
//       <div className="top-section">
//         <div className="metrics">
//           <div className="metric">
//             <h3>Total Orders</h3>
//             <p>1234</p>
//           </div>
//           {/* Other metrics */}
//         </div>
//         <div className="activity-chart">
//           {/* Chart component */}
//         </div>
//       </div>
//       <div className="bottom-section">
//         <div className="recent-orders">
//           {/* Table component */}
//         </div>
//         <div className="goals">
//           {/* Goals section */}
//         </div>
//         <div className="customer-feedback">
//           {/* Feedback section */}
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
