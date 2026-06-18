const axios = require("axios");
const BASE_URL = process.env.CASHFREE_BASE_URL;

exports.createOrder = async (orderData) => {
  try {
    console.log("Callingn url:", `${BASE_URL}/orders`);
    const response = await axios.post(`${BASE_URL}/orders`, orderData, {
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_APP_ID.trim(),
        "x-client-secret": process.env.CASHFREE_SECRET_KEY.trim(),
        "x-api-version": "2023-08-01",
      },
    });

    return response.data;
  } catch (err) {
    console.log("CASHFREE ERROR:", err.response?.data || err.message);
    console.log("STATUS:", err.response?.status);
    console.log("DATA:", err.response?.data);
    throw err;
  }
};
