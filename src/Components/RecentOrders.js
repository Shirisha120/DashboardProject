import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ordersData from '../ordersData.json';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const RecentOrders = () => {
  const barData = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [0, 1, 3, 4, 2, 6,7, 4,8,5,3,0 ],
        borderColor: 'hsl(0, 4%, 51%)',
        backgroundColor: 'rgb(16, 16, 232)',
        fill: true,
      },
    ],
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'status delivered';
      case 'Cancelled':
        return 'status cancelled';
      case 'Pending':
        return 'status pending';
      default:
        return '';
    }
  };

  const data = {
    labels: ['Net Profit', 'Other'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#36A2EB', 'rgb(155, 188, 227)'],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="container">
      <div className="side-panl">
        <div className="icon-list">
          <i className="bi bi-three-dots-vertical"></i>
          <i className="bi bi-house-door-fill"></i>
          <i className="bi bi-kanban"></i>
          <i className="bi bi-clipboard2-check"></i>
          <i className="bi bi-archive"></i>
          <i className="bi bi-bag-check-fill"></i>
        </div>
        <div className="iconcircle">
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="search-container">
            <i class="bi bi-search"></i>
            <input type="text" className="search-input" placeholder="Search" />
          </div>

          <div className="user-info">
            <i class="bi bi-envelope"></i>
            <i class="bi bi-gear"></i>
            <i class="bi bi-bell"></i>
            <i class="bi bi-person-circle"></i>
          </div>
        </div>
        <div className="body-section">
          <h5>Dashboard</h5>
          <div className="content">
            <div className="stat">
              <div><i class="bi bi-basket2-fill"></i></div>
              <div className="label">Total Orders</div>
              <div className="value">75
                <span className="position">
                  <p className="change positive">▲ 3%</p>
                </span>
              </div>
            </div>
            <div className="stat">
              <div><i class="bi bi-bag-check"></i></div>
              <div className="label">Total Delivered</div>
              <div className="value">70
                <span className="position">
                  <p className="change negative">▼ 3%</p>
                </span>
              </div>
            </div>
            <div className="stat">
              <div><i class="bi bi-bag-x"></i></div>
              <div className="label">Total Cancelled</div>
              <div className="value">05
                <span className="position">
                  <p className="change positive">▲ 3%</p>
                </span>
              </div>
            </div>
            <div className="stat">
              <div><i class="bi bi-currency-dollar"></i></div>
              <div className="label">Total Revenue</div>
              <div className="value">$12k
                <span className="position">
                  <p className="change negative">▼ 3%</p>
                </span>
              </div>
            </div>
            <div className="netProfit">
              <div className='npfirst'>
                <div className="label">Net Profit</div>
                <div className="value">$6759.25  </div>
                <span className="posigetion">
                  <p className="change positive">▲ 3% </p>
                </span>
              </div>
              <div className='npsecond'>
                <span className="doughnut-container">
                  <Doughnut data={data} options={options} width={100} height={100} />
                  <span className="doughnut-center">
                    <div className="percentage">70%</div>
                    <div className="text">Coal Completed</div>
                  </span>
                  <span className="posigetion">
                    <p className="description">+The values has been rounded off.</p>
                  </span>
                </span>
              </div>
            </div>
            <div className="activity-chart">
              <Bar data={barData} />
            </div>
            
            <div className="goals-dishes-menus">
              <div className="section">
                <div className="gicon-list">
                  <span class="icon-container">
                    <i className="bi bi-crosshair"></i>
                    <i className='glabel'>Goals</i>
                    <i className="arrow right"></i>
                  </span>
                  <span class="icon-container"><i class="bi bi-cup-hot-fill"></i><i>Popular Dishes</i><i class="arrow right"></i></span>
                  <span class="icon-container" ><i class="bi bi-eject-fill"></i><i>Menus</i> <i class="arrow right"></i></span>
                </div>
              </div>
            </div>
            {/* <span class="icon-container"><i class="icon">🍔</i>Popular Dishes<i  class="arrow right"></i></span> */}

            <div className="recent-orders">
              <h6 className='h'>Recent Orders</h6>
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Order No.</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.orders.map((order, index) => (
                    <tr key={index}>
                      <td>
                        <img src={order.image} alt={order.customer} className="customer-img" />
                        {order.customer}
                      </td>
                      <td>{order.orderNo}</td>
                      <td>{order.amount}</td>
                      <td className={getStatusClass(order.status)}>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="feedback">
              <h6 className='h'>Customer's Feedback</h6>
              <div className="feedback-list">
                <div className="feedback-item">
                  <img src="img3.jpeg" className="feedback-img" />
                  <span className='fitemName'>Jenny Wilson</span>
                  <p>⭐⭐⭐⭐☆</p>
                  <p className='fprgaph'>
                    The food was excellent and so was the service.
                    I had the mushroom risotto with scallops which was awesome.
                    I had a burger over greens (gluten-free) which was also very good.
                    They were very conscientious about gluten allergies.
                  </p>
                </div>
                <div className="feedback-item">
                  <img src="image2.jpeg" className="feedback-img" />
                  <span className='fitemName'>Dianne Russell</span>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='fprgaph'>
                    We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee.
                    Perfect service.
                  </p>
                </div>
                <div className="feedback-item">
                  <img src="image4.jpeg" className="feedback-img" />
                  <span className='fitemName'>Devon Lane</span>
                  <p>⭐⭐⭐⭐☆</p>
                  <p className='fprgaph'>
                    Normally wings are wings, but theirs are lean, meaty,
                    tender, and flavorful. Great experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
