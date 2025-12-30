import { notFound } from "next/navigation";
import videos from "../../videos.json";
import React from "react";
import Video from "./components/Video";
import Info from "./components/Info";
import SimilarVideos from "./components/SimilarVideos";

function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function generateStaticParams() {
  return videos.map((v) => ({ details: slugify(v.videoTitle || v.id || "video") }));
}

export async function generateMetadata({ params }) {
  const all = videos.map((v) => ({ ...v, slug: slugify(v.videoTitle || v.id || "video") }));
  const video = all.find((x) => x.slug === params.details);

  if (!video) {
    return {
      title: "Video Not Found - CoderFlix",
      description: "The requested video could not be found.",
      icons: { icon: "/favicon.svg" },
    };
  }

  return {
    title: video.videoTitle,
    description: video.description || `${video.channelName} • ${video.views || ""}`,
    openGraph: {
      title: video.videoTitle,
      description: video.description,
      images: [
        {
          url: video.thumbnailURL,
          width: 1280,
          height: 720,
          alt: video.videoTitle,
        },
      ],
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default function Details({ params }) {
  const all = videos.map((v) => ({ ...v, slug: slugify(v.videoTitle || v.id || "video") }));
  const current = all.find((v) => v.slug === params.details);
  if (!current) return notFound();

  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Primary */}
          <section className="lg:col-span-8">
            {/* <!-- Video --> */}
            <Video video={current} />

            {/* <!-- Info --> */}
            <Info video={current} />
          </section>

          {/* <!-- Similar Videos --> */}
          <SimilarVideos currentVideo={current} videos={all} />
        </div>
      </div>
    </main>
  );
}
