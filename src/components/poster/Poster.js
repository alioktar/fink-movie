import React from "react";
import "./Poster.css";
import poster from "../../assets/images/movie-poster.png";
import notflixIcon from "../../assets/images/netflix-icon.png";

const Poster = () => {
  return (
    <aside className="poster">
      <div className="thumbnail">
        <img src={poster} className="movie" alt="You've Got Murder" />
        <a
          href="https://www.netflix.com/title/81262119"
          className="btn watch-btn"
          target="blank"
        >
          <img src={notflixIcon} className="netflix-icon" alt="Netflix" />
          <span className="watch-btn-text">
            Now Streaming
            <br />
            <span>Watch Now</span>
          </span>
        </a>
      </div>
      <button className="btn another-btn">Another Suggestion</button>
    </aside>
  );
};

export default Poster;
