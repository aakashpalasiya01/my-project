import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const ForgotPasswordComponent = dynamic(() => import("@/component/Forgetpassword"), {
  ssr: true,
  loading: () => <ComponentLoader />,
});

const Registration = () => <ForgotPasswordComponent />;

export default Registration;