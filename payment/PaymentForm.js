import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CARD_NUMBERS = [
  { label: "Visa - 4111 1111 1111 1111", value: "4111111111111111" },
  { label: "MasterCard - 5555 5555 5555 4444", value: "5555555555554444" },
  // Add more card numbers here
];

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [selectedCard, setSelectedCard] = useState(""); // State to store the selected card number
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the selected card number from the state
    const selectedCardNumber = selectedCard.value;

    // Tokenize the selected card details securely on the client side
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        // Send the payment method ID and selected card number to your server for further processing
        const response = await axios.post("http://localhost:3000/", {
          amount: 1000,
          paymentMethodId: id,
          selectedCardNumber,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleCardChange = (event) => {
    setSelectedCard(
      CARD_NUMBERS.find((card) => card.value === event.target.value)
    );
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <select
                value={selectedCard.value}
                onChange={handleCardChange}
              >
                <option value="">Select a card</option>
                {CARD_NUMBERS.map((card) => (
                  <option key={card.value} value={card.value}>
                    {card.label}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="FormRow"> */}
              {/* <CardElement options={CARD_OPTIONS} /> */}
            {/* </div> */}
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of your life
          </h2>
        </div>
      )}
    </>
  );
}
