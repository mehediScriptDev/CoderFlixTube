/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CustomLink from '../../../Components/CustomLink';

const SimilarVideos = ({ currentVideo, videos }) => {
    // compute similar videos by matching categories, exclude current
    const currentCats = currentVideo?.categories || [];
    const similar = videos.filter(v => v.slug !== currentVideo.slug)
      .map(v => ({
        ...v,
        score: v.categories ? v.categories.filter(c => currentCats.includes(c)).length : 0
      }))
      .sort((a,b) => b.score - a.score)
      .slice(0, 10);

    return (
        <aside className="lg:col-span-4">
            <h2 className="text-base font-medium mb-4">Similar videos</h2>
            <div id="similarVideos" className="space-y-3" aria-live="polite">
              {similar.map((v) => (
                <CustomLink key={v.slug} path={`/video/${v.slug}`}>
                  <div className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2">
                    <div className="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                      <img
                        src={v.thumbnailURL}
                        alt={v.videoTitle}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                        {v.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                        {v.videoTitle}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 truncate">
                        {v.channelName}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <span>{v.views}</span>
                        <span>•</span>
                        <span>{v.publishedDate}</span>
                      </div>
                    </div>
                  </div>
                </CustomLink>
              ))}
            </div>
          </aside>
    );
};

export default SimilarVideos;