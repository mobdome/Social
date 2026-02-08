const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
app.use(express.static('public'));
app.get('/', (req, res) => res.send('Mobdome Social MVP'));
app.listen(port, () => console.log('Social running on ' + port));
