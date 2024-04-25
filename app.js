// Import the express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route that returns hardcoded data
app.get('/api/data', (req, res) => {
    const data = [
        { source: "Direct", total: '2873 visits' },
        { source: "Facebook", total: '2000 visits' },
        { source: "Instagram", total: '2500 visits' },
        { source: "Twitter", total: '1800 visits' },
        { source: "WhatsApp", total: '1500 visits' },
        { source: "LinkedIn", total: '1200 visits' },
        { source: "Pinterest", total: '1100 visits' },
        { source: "YouTube", total: '1000 visits' },
        { source: "TikTok", total: '900 visits' },
        { source: "Reddit", total: '800 visits' },
        { source: "Tumblr", total: '700 visits' }
    ];
    res.json(data);
});

// Start the Express server
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
