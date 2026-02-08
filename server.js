const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'));
app.use(bodyParser.json());

// Mock database or status tracking
const scans = {};

app.post('/scan', (req, res) => {
    const { username } = req.body;
    
    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    // Mock logic: Generate random follower count between 1k and 50k
    const followerCount = Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
    const formattedCount = followerCount.toLocaleString();

    // Simulate processing time
    setTimeout(() => {
        res.json({
            success: true,
            username: username,
            followers: formattedCount,
            ready_to_export: true,
            message: `Found ${formattedCount} followers for @${username}`
        });
    }, 1500);
});

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port, () => console.log('Social running on port ' + port));

