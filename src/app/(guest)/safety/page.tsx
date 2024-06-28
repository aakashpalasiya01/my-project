import dynamic from "next/dynamic";
import SafetyLoading from "./loading";

const SafetyComponent = dynamic(() => import("@/component/SafetyComponent/Safety"), {
  ssr: true,
  loading: () => <SafetyLoading/>,
});

const Safety = () => <SafetyComponent />;

export default Safety;