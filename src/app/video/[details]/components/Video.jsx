import React from 'react';

const Video = () => {
    return (
        <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
              <iframe
                id="videoPlayer"
                className="w-full h-full"
                title="Video player"
                src="https://www.youtube.com/embed/hMTdA8TAL1s?rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
    );
};

export default Video;