/* eslint-disable react-hooks/exhaustive-deps */
"use server";
import * as API from "@/store/serverApiAction/serverApis";
import SafetyContent from "./SafetyContent";

async function Safety() {
  const response = await API.get('/wp-json/wp/v2/pages?slug=safety');
  const renderingContent = response.data;

  return (
    <main className="main_content">
      <SafetyContent renderingContent={renderingContent}/>
    </main>
  );
}

export default Safety;