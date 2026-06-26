const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const relationshipInfo = {
  started: '29 September 2025',
  years: '3 years',
  description: 'Our best friend relationship is strong, and I want to say sorry and make things right.'
};

app.get('/api/details', (req, res) => {
  res.json(relationshipInfo);
});

app.post('/api/message', (req, res) => {
  const { name, apology } = req.body;
  if (!name || !apology) {
    return res.status(400).json({ error: 'Name and apology text are required.' });
  }

  res.json({
    status: 'success',
    note: `Dear ${name}, your apology has been received. I hope this message helps you feel loved and understood.`,
    apology,
    receivedAt: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
