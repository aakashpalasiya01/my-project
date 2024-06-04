import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const RegistrationComponent = dynamic(() => import("@/component/Registernow"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const Registration = () => <RegistrationComponent />;

export default Registration;