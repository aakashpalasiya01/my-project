import config from "@/utils/config";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { StripeType } from "@/types/commonTypes";

const LoadStrip = ({ setCardData, loaded, setLoaded }: StripeType) => {
  const stripePromise = loadStripe(config.STRIP_PUBLISH_KEY);

  return (
    <Elements stripe={stripePromise}>
        <CheckoutForm setCardData={setCardData} loaded={loaded} setLoaded={setLoaded} />
    </Elements>
  )
}

export default LoadStrip;