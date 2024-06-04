import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const HomeComponent = dynamic(() => import("@/component/Home"), {
  ssr: true,
  loading: () => <ComponentLoader />,
});

const Home = () => <HomeComponent />;

export default Home;