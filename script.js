function redirectTo(method) {
  let url;
  switch (method) {
    case "google":
      url = "https://pay.google.com/gp/p/ui/pay?pa=ismarttarun1-1@okicici&pn=Spy Agent&am=1";
      break;
    case "paytm":
      url = "https://paytm.com/pay?pa=example@upi&pn=FastPay&am=100";
      break;
    case "phonepe":
      url = "https://phon.pe/exampleupi";
      break;
    case "razorpay":
      url = "https://razorpay.com/pay/example";
      break;
    default:
      alert("Payment method not found.");
      return;
  }

  // Simulate a confirmation step after redirection
  window.location.href = `confirmation.html?status=success&method=${method}`;
}
