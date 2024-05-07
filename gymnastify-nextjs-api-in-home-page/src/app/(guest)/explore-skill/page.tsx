import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const HomeComponent = dynamic(() => import("@/component/ExploreComponent"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const Home = () => <HomeComponent />;

export default Home;