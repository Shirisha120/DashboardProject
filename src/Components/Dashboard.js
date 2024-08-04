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

const Dashboard = () => {
    const barData = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
            {
                label: 'Activity',
                data: [0, 1, 3, 4, 2, 6, 8, , 7, 4, 2, 6, 8],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                // tension: 0.1,
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
                borderWidth: 0, // Optional: to remove the border of the segments
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
        <div className="dashboard">
            <div className="content">
                <div className="stat">
                    <div><i class="bi bi-cart-plus-fill"></i></div>
                    <div className="label">Total Orders</div>
                    <div className="value">75
                        <span className="change positive">▲ 3%</span></div>
                </div>
                <div className="stat">
                    <div><i class="bi bi-cart-check-fill"></i></div>
                    <div className="label">Total Delivered</div>
                    <div className="value">70
                        <span className="change negative">▼ 3%</span>
                    </div>
                </div>
                <div className="stat">
                    <div><i class="bi bi-cart-x-fill"></i></div>
                    <div className="label">Total Cancelled</div>
                    <div className="value">05
                        <span className="change positive">▲ 3%</span>
                    </div>
                </div>
                <div className="stat">
                    <div><i class="bi bi-currency-dollar"></i></div>
                    <div className="label">Total Revenue</div>
                    <div className="value">$12k
                        <span className="change negative">▼ 3%</span>
                    </div>
                </div>
                <div className="netProfit">
                    <div className='npfirst'>
                        <div className="label">Net Profit</div>
                        <div className="label">$6759.25  </div>
                        <span className="value">
                            <p className="change positive">▲ 3%</p>
                        </span>
                    </div>
                    <div className='npsecond'>
                        <span className="doughnut-container">
                            <Doughnut data={data} options={options} width={100} height={100} />
                            <span className="doughnut-center">
                                <div className="percentage">70%</div>
                                <div className="text">Can Completed</div>
                            </span>
                        </span>
                    </div>
                    <div className='npthird' >
                        <label className="description">The values have been taken off</label>
                    </div>
                </div>
                <div className="activity-chart">
                    <Bar data={barData} />
                </div>
                <div className="goals-dishes-menus">
                    <div className="section">
                        <i className="bi bi-crosshair"></i> Goals<i class="arrow right"></i> <br></br>
                        <i class="bi bi-backpack"></i> Popular Dishes <i class="arrow right"></i> <br></br>
                        <i class="bi bi-eject-fill"></i>Menus <i class="arrow right "></i><br></br>
                    </div>
                </div>
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
                            <span className='itemName'>Jenny Wilson</span>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className='p'>The food was excellent and so was the service...</p>
                        </div>
                        <div className="feedback-item">
                            <span className='itemName'>Dianne Russell</span>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className='p'>We enjoyed the Eggs Benedict served on homemade...</p>
                        </div>
                        <div className="feedback-item">
                            <span className='itemName'>Devon Lane</span>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className='p'>Normally we are wings fans, but theirs are lean...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
