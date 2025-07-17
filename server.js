const express = require('express');
const bodyParser = require('body-parser');
const { handleCall } = require('./twilioHandler');

const app = express();
app.use(bodyParser.json());

app.post('/start-call', handleCall);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Voice AI Bot server running on port ${PORT}`);
});