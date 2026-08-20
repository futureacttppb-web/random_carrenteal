// app.js
const express = require('express');
const app = express();
const port = 3000;

// Homepage
app.get('/', (req, res) => {
  res.send('<h1>🚗 QuickCar Rentals</h1><p>ERROR 404</p>');
});

// Fake booking page
app.get('/book', (req, res) => {
  res.send('<h2>Book a Car</h2><p>Sorry we are having problems, 31-49U295824Y5924524524!</p><a href="/">Back to Home</a>');
});
app.get('/', (req, res) => {
  // Check X-Forwarded-For header, fallback to connection remote address
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;
  
  console.log(`Visitor IP: ${ip}`);
  res.send('Hello!');
});
});


app.listen(port, () => {
  console.log(`Site running at http://localhost:${port}`);
});
