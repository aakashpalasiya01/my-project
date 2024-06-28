"use client";
import config from "@/utils/config";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCardForm from "./StripeCardForm";

const LoadStripScript = (props: any) => {
  const card_id: string | undefined = props.params.slug;
  const product_id: string | undefined = props?.searchParams?.product_id;
  const stripePromise = loadStripe(config.STRIP_PUBLISH_KEY);

  return (
    <Elements stripe={stripePromise}>
        <StripeCardForm productId={product_id} cardId={card_id} />
    </Elements>
  )
}

export default LoadStripScript;