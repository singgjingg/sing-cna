const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.json());

app.post('/sendnotification', (req, res) => {
  const { status, orderId } = req.body;

  console.log(`Notification: Order ${orderId} - Payment ${status}`);

  res.json({ message: `Notification sent for order ${orderId} with status: ${status}` });
});

app.listen(PORT, () => {
  console.log(`Notification Service running on http://localhost:${PORT}`);
});
