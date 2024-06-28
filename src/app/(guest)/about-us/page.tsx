import dynamic from "next/dynamic";
import AboutLoading from "./loading";

const HomeComponent = dynamic(() => import("@/component/AboutUsComponent/AboutUs"), {
  ssr: true,
  loading: () => <AboutLoading />,
});

const Home = () => <HomeComponent />;

export default Home;