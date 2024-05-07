import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const AddUser = dynamic(() => import("@/component/UserComponent/AddUserform/index"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const AddUserComponent = () => <AddUser />;

export default AddUserComponent;