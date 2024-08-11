require('dotenv').config();

const apiKey = process.env.abc2312c7dd44c7ea61fd123bb075d3f;

$.get(`https://api.blockcypher.com/v1/btc/main?token=${apiKey}`)
  .then(function(d) {
    console.log(d);
  });

// Add event listener to fetch blockchain info when the page loads or on a button click
document.addEventListener('DOMContentLoaded', () => {
    fetchBlockchainInfo();
});

function fetchBlockchainInfo() {
    fetch('/api/blockchain-info')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Display blockchain info in the console
            document.getElementById('blockchainInfo').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching blockchain info:', error);
            document.getElementById('blockchainInfo').innerText = 'Failed to fetch blockchain information';
        });
}
