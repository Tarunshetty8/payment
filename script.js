function redirectTo(method) {
  let url;
  switch (method) {
    case "google":
      url = "upi://pay?pa=ismarttarun1-1@okicici&pn=Spy%20Agent&am=1&cu=INR";  // Corrected UPI link format
      break;
    case "paytm":
      url = "upi://pay?pa=example@upi&pn=FastPay&am=100&cu=INR";  // Corrected UPI link format
      break;
    case "phonepe":
      url = "upi://pay?pa=exampleupi@upi&pn=FastPay&am=100&cu=INR";  // Corrected UPI link format
      break;
    case "razorpay":
      url = "https://razorpay.com/payment-link";  // Razorpay link (needs your actual Razorpay link)
      break;
    default:
      alert("Payment method not found.");
      return;
  }

  // Redirecting to the payment URL
  window.location.href = url;

  // Redirect to a confirmation page with a query parameter for method
  // This part depends on whether the payment method supports redirects back to your site
  setTimeout(function() {
    window.location.href = `confirmation.html?status=success&method=${method}`;
  }, 5000);  // 5 seconds delay for payment processing (adjust as needed)
}
