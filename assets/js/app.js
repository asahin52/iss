// app.js for ISS Manager Dashboard

// Function to fetch real-time statistics
async function fetchRealTimeStatistics() {
    try {
        const response = await fetch('/api/statistics');
        const data = await response.json();
        updateStatisticsUI(data);
    } catch (error) {
        console.error('Error fetching statistics:', error);
    }
}

// Function to update the UI with fetched statistics
function updateStatisticsUI(data) {
    document.getElementById('stat1').innerText = data.stat1;
    document.getElementById('stat2').innerText = data.stat2;
    // Update other statistics as needed
}

// Function to initialize customer chart
function initializeCustomerChart() {
    const ctx = document.getElementById('customerChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Yeni Müşteriler',
                data: [65, 59, 80, 81, 56, 85],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to initialize revenue chart
function initializeRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Gelir (₺)',
                data: [235000, 289000, 321000, 267000, 298000, 342000],
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₺' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Function to manage ISP functions
function manageISP(action) {
    // Logic to manage ISP based on action
    console.log(`Managing ISP with action: ${action}`);
}

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCustomerChart();
    initializeRevenueChart();
});

// Set up periodic data fetching
setInterval(fetchRealTimeStatistics, 30000); // Fetch every 30 seconds
