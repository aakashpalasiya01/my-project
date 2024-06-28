import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";

const SingleBlog = dynamic(() => import("@/component/SingleBlogComponent/SingleBlog"), {
  ssr: false,
  loading: () => <ComponentLoader />,
});

const Home = () => <SingleBlog />;

export default Home;