const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3002;

const PAYMENT_SERVICE_URL = "http://localhost:3003/paymentprocess";
const NOTIFICATION_SERVICE_URL = "http://localhost:3004/sendnotification";

app.use(express.json());

app.post("/addorder", async (req, res) => {
  const orderId = Date.now();

  try {
    // Order API calls Payment API
    const paymentResponse = await axios.post(PAYMENT_SERVICE_URL, { orderId });
    const paymentStatus = paymentResponse.data.status;

    // Order API calls Notification API with the payment result
    await axios.post(NOTIFICATION_SERVICE_URL, {
      orderId,
      status: paymentStatus,
    });

    res.json({
      message: "Order processed",
      orderId,
      paymentStatus,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing order", error: error.message });
  }
});

app.get("/vieworder", (req, res) => {
  res.json({ message: "Viewing order details" });
});

app.post("/cancelorder", (req, res) => {
  res.json({ message: "Order has been cancelled" });
});

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});
