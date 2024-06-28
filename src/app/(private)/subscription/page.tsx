import dynamic from "next/dynamic";
import Loading from "./loading";

const SubscriptionComponent = dynamic(() => import("@/component/Subscription"), {
  ssr: true,
  loading: () => <Loading />
});

const Subscription = (props: any) => <SubscriptionComponent {...props} />;

export default Subscription;