import React from 'react';

const Info = () => {
    return (
        <div className="mt-4">
              <h1
                id="videoTitle"
                className="text-lg sm:text-xl font-medium leading-snug"
              >
                OpenAI and Google Shocked by the First EVER Open Source AI Agent
              </h1>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div id="videoMeta" className="text-sm text-gray-400">
                  <span id="viewCount">101K views</span>
                  <span className="mx-1">•</span>
                  <span id="publishTime">3 months ago</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border border-[#303030] overflow-hidden bg-[#1f1f1f]">
                    <button
                      className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                      type="button"
                      aria-label="Like"
                    >
                      <svg
                        className="w-5 h-5 text-gray-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.68 9H14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                        ></path>
                      </svg>
                      <span
                        id="likeCount"
                        className="text-sm font-medium text-[#e5e5e5]"
                      >
                        6.8K
                      </span>
                    </button>
                    <div className="w-px h-8 bg-[#303030]"></div>
                    <button
                      className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                      type="button"
                      aria-label="Dislike"
                    >
                      <svg
                        className="w-5 h-5 text-gray-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7L2.34 12a2 2 0 0 0 1.98 3H10z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
                        ></path>
                      </svg>
                      <span
                        id="dislikeCount"
                        className="text-sm font-medium text-[#e5e5e5]"
                      >
                        110
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Channel row --> */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    id="channelAvatar"
                    src="https://yt3.ggpht.com/XRZC_XqZoSUtB_Zo9R0w2vDRqGqVv0lKZTRYI6b-7DPKi32MtByVhxgIokLAguhf7fw__K8o3g"
                    alt="GreatStack avatar"
                    className="w-10 h-10 rounded-full object-cover bg-[#262626] ring-1 ring-white/10 flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p
                      id="channelTitle"
                      className="font-medium leading-tight truncate"
                    >
                      GreatStack
                    </p>
                    <p className="text-xs text-gray-400">Publisher</p>
                  </div>
                </div>
              </div>

              {/* <!-- Description --> */}
              <div className="mt-4">
                <div className="bg-[#1f1f1f] border border-[#262626] rounded-xl p-4">
                  <p
                    id="videoDescription"
                    className="text-sm text-gray-200 whitespace-pre-line line-clamp-3"
                  >
                    Categories: AI • Open Source • Agents • Technology
                  </p>
                  <button
                    id="toggleDescription"
                    className="mt-3 text-sm font-medium text-gray-300 hover:text-white"
                    type="button"
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div>
    );
};

export default Info;