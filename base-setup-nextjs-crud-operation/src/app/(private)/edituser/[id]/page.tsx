import dynamic from "next/dynamic";

import ComponentLoader from "@/shared/component-loader";

const EditUser = dynamic(() => import("@/component/UserComponent/EditUserform/index"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const EditUserComponent = () => <EditUser />;


export default EditUserComponent;