import dynamic from "next/dynamic";

const SubscriptionDetailsComponent = dynamic(() => import("@/component/Subscription/SubscriptionDetails"), {
  ssr: true,
});

const SubscriptionDetails = () => <SubscriptionDetailsComponent />;

export default SubscriptionDetails;