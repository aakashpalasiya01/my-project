import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const ResetPasswordComponent = dynamic(() => import("@/component/ResetPassword"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const RESETPASSWORD = () => <ResetPasswordComponent />;

export default RESETPASSWORD;