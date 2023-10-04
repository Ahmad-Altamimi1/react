import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51NoRh3KjD3e5Hnk5lvnhNgZoM4fpNrexOLi6f0Tz7XJZC9NGAxBUhkMBb672bPenRv8JukzguoEv8dzQx7YLEUz60034vj9wWk";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
