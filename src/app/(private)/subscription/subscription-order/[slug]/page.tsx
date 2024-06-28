import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const SubscriptionOrderComponent = dynamic(() => import("@/component/Subscription/MySubscription/SubscriptionRecent"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const SubscriptionOrder = (props:any) => <SubscriptionOrderComponent {...props}/>;

export default SubscriptionOrder;