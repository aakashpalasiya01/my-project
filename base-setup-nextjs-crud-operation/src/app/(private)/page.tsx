import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const UserTable = dynamic(() => import("@/component/UserComponent"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const Dashboard = () => <UserTable />;

export default Dashboard;