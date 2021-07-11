import React from "react";

const Tags = () => {
  return (
    <div className="tags">
      <span>10/25/2019</span>
      <span>Comedy, Crime</span>
      <span>1h 52m</span>
      <span className="play">
        <svg
          width="16"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.32258 1.87097L11 8L1.32258 14.129L1 1.87097H1.32258Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Play Trailer
      </span>
    </div>
  );
};

export default Tags;
