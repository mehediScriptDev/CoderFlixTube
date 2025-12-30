import CustomLink from "./Components/CustomLink";
import videos from "./videos.json";

function slugify(text) {
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

function slugFromId(id) {
    const v = videos.find((x) => x.videoURL?.includes(id) || x.thumbnailURL?.includes(id));
    if (!v) return id;
    return slugify(v.videoTitle);
}

export default function Home() {
  function extractId(video) {
    if (!video) return "";
    if (video.videoURL) {
      const m = video.videoURL.match(/[?&]v=([^&]+)/);
      if (m) return m[1];
      const e = video.videoURL.match(/\/embed\/([^/?]+)/);
      if (e) return e[1];
    }
    if (video.thumbnailURL) {
      const t = video.thumbnailURL.match(/vi\/([^/]+)/);
      if (t) return t[1];
    }
    return video.id || "";
  }

  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {videos.map((video) => {
          const id = extractId(video);
          const slug = slugify(video.videoTitle || id || "video");
          return (
            <CustomLink key={slug} path={`/video/${slug}`}>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#262626] mb-3 ring-1 ring-white/5">
                <img
                  src={video.thumbnailURL}
                  alt={video.videoTitle}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                  {video.duration || "00:00"}
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={video.channelAvatar}
                    alt={`${video.channelName} avatar`}
                    loading="lazy"
                    className="w-9 h-9 rounded-full object-cover bg-[#262626] ring-1 ring-white/10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-[#e50914] transition-colors">
                    {video.videoTitle}
                  </h3>
                  <p className="text-xs text-gray-400 mb-0.5">{video.channelName}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{video.views || "0 views"}</span>
                    <span>•</span>
                    <span>{video.publishedDate || "Unknown"}</span>
                  </div>
                </div>
              </div>
            </CustomLink>
          );
        })}
      </div>
    </main>
  );
}

  