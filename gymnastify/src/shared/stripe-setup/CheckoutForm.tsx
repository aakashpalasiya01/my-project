import { StripeType } from "@/types/commonTypes";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { StripeElements } from "@stripe/stripe-js";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const CheckoutForm = ({ setCardData, loaded, setLoaded }: StripeType) => {
  const stripe = useStripe();
  const [error, setError] = useState<string | undefined | null>(null);
  const elements: StripeElements | null = useElements();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoaded(true);
    if (stripe && elements) {
      let cardDetail = elements.getElement(CardElement);
      const { token, error } = await stripe.createToken(cardDetail!);
      if (!error) setCardData(token);
      if (error) {
        setError(error ? error.message : null);
        setLoaded(false);
      }
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        showIcon: true,
        color: "#000",
        fontSize: "14px",
        "::placeholder": {
          color: "#000",
        },
      },
      invalid: {
        color: "#fa755a",
        fontSize: "14px",
      },
    },
  };
  return (
    <section className="stripe_payment">
      <CardElement
        className="ele_input"
        options={cardElementOptions}
      />
      {error && <div className="error_stripepay">{error}</div>}
      <div className="stripe_addcard">
        <button
          type="button"
          className="btn_animated primary_btn btn_blockmd"
          onClick={handleSubmit}
          disabled={!stripe}
        >
          {loaded ? (
            <ThreeDots
              height="20"
              width="50"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          ) : (
            "Add Card"
          )}
        </button>
      </div>
    </section>
  );
};

export default CheckoutForm;
