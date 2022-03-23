export const ppOptions = {
  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};

export default ppOptions;
