const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.post('/paymentprocess', (req, res) => {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    res.json({ status: 'Success', message: 'Payment processed successfully' });
  } else {
    res.json({ status: 'Failure', message: 'Payment processing failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Payment Service running on http://localhost:${PORT}`);
});
