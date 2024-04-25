// Import the express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route that returns hardcoded data
app.get('/api/data', (req, res) => {
    const data = [
        { source: "Direct", total: '2873 visits' },
        { source: "Facebook", total: '2000 visits' },
        { source: "Instagram", total: '2873 visits' },
        { source: "Twitter", total: '2673 visits' },
        { source: "Whatsapp", total: '2123 visits' },
        { source: "Threads", total: '1258 visits' },
        { source: "Snapchat", total: '1200 visits' },
        { source: "Google Plus", total: '90 visits' },
        { source: "Slack", total: '120 visits' },
        { source: "Teams", total: '100 visits' },
        { source: "Youtube", total: '3000 visits' }
    ];
    res.json(data);
});

// Start the Express server
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
