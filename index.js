const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/connect', (req, res) => {
  const { platform } = req.body;
  if (!platform) return res.status(400).json({ success: false, error: 'Platform is required' });

  console.log(`Starting Agent-Reach for platform: ${platform}`);
  
  exec(`echo "Agent-Reach simulated success for ${platform}"`, (error, stdout, stderr) => {
    if (error) return res.status(500).json({ success: false, error: error.message });
    res.json({ success: true, output: stdout.trim(), platform });
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Agent-Reach Microservice running on port ${PORT}`);
});
