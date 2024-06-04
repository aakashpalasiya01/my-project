import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const ThankyouComponent = dynamic(() => import("@/component/Registernow/EmailConfirmation"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const Home = () => <ThankyouComponent />;

export default Home;