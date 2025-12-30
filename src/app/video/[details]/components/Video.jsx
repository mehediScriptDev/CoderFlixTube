import React from 'react';

function toEmbedUrl(watchUrl) {
  if (!watchUrl) return '';
  try {
    const url = new URL(watchUrl);
    // If it's already an embed URL, return as-is
    if (url.pathname.includes('/embed/')) return watchUrl;
    // Convert watch?v=ID to embed/ID
    const vid = url.searchParams.get('v');
    if (vid) return `https://www.youtube.com/embed/${vid}`;
    return watchUrl;
  } catch (e) {
    return watchUrl;
  }
}

const Video = ({ video }) => {
    const src = toEmbedUrl(video?.videoURL);
    return (
        <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
              <iframe
                id="videoPlayer"
                className="w-full h-full"
                title={video?.videoTitle || 'Video player'}
                src={src + '?rel=0'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
    );
};

export default Video;