app.post("/api/payment/webhook", (req, res) => {
  const event = req.body;

  if (event.payment_status === "SUCCESS") {
    // update MongoDB order
  }

  res.sendStatus(200);
});
