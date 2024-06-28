/* eslint-disable react-hooks/exhaustive-deps */
"use server";
import * as API from "@/store/serverApiAction/serverApis";
import AboutContent from "./AboutContent";

async function AboutUs() {
  const response = await API.get('/wp-json/wp/v2/pages?slug=about-us');
  const renderingContent = response.data;
  return (
    <main className="main_content">
      <AboutContent renderingContent={renderingContent}/>
    </main>
  );
}

export default AboutUs;