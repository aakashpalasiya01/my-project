import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("@/component/Subscription/MySubscription"), {
  ssr: true,
});

const MySubscription = () => <HomeComponent />;

export default MySubscription;