import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const ThankYouComponent = dynamic(() => import("@/component/Subscription/ThankYou"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const ThankYou = (props:any) => <ThankYouComponent {...props}/>;

export default ThankYou;