import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const EmailConfirmationComponent = dynamic(() => import("@/component/Registernow/EmailConfirmation"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const Registration = () => <EmailConfirmationComponent />;

export default Registration;