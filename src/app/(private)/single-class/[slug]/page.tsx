import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("@/component/SingleClass/SingleClass"), {
  ssr: false,
  // loading: () => <ComponentLoader />,
});

const Home = () => <HomeComponent />;

export default Home;