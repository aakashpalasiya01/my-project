import dynamic from "next/dynamic";

const SubscriptiondDetails  = dynamic(() => import("@/component/Subscription/MySubscription/SubscriptionPlan"), {
  ssr: true,
});

const MySubscriptiondDetails = (props: any) => <SubscriptiondDetails  {...props}/>;

export default MySubscriptiondDetails;