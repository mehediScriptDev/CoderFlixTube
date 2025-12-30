import React from "react";
import Video from "./components/Video";
import Info from "./components/Info";
import SimilarVideos from "./components/SimilarVideos";

export const metadata = {
  title: "OpenAI and Google Shocked by the First EVER Open Source AI Agent -CoderFlix",
  description: "Watch “OpenAI and Google Shocked by the First EVER Open Source AI Agent” on CoderFlix.",
};

const Details = () => {
  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Primary */}
          <section className="lg:col-span-8">
            {/* <!-- Video --> */}
            <Video/>

            {/* <!-- Info --> */}
            <Info/>
          </section>

          {/* <!-- Similar Videos --> */}
          <SimilarVideos/>
        </div>
      </div>
    </main>
  );
};

export default Details;
