const cashfree = require("../utils/cashfree");

exports.createPayment = async (req, res) => {
  try {
    const { orderId, amount, phone } = req.body;

    const payload = {
      order_id: orderId,
      order_amount: Number(amount), // ✅ FIX (important)
      order_currency: "INR",
      customer_details: {
        customer_id: "cust_" + Date.now(),
        customer_phone: phone,
      },
      order_meta: {
        return_url: "https://cashfree-payment-app.onrender.com/success.html?order_id={order_id}",
      },
    };
    console.log("Payload:", JSON.stringify(payload, null, 2));
    const result = await cashfree.createOrder(payload);

    res.json({
      paymentSessionId: result.payment_session_id,
      orderId: result.order_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
