import React from "react";
import "./VideoView.css";

const VideoView = () => {
  return (
    <div className="video-view">
      <div
        className="video-bg"
        style={{ backgroundImage: `url("/assets/video-frame.jpg")` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <div className="video-view-tag">| VIDEO VIEW</div>
          <div className="video-view-title">
            Get Closer View <br /> & Different <br /> Feeling
          </div>
        </div>
      </div>

      <div className="video-frame">
        <img src="/assets/video-frame.jpg" alt="Video Preview" />
        <div className="play-button">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </span>
        </div>
      </div>

      <div className="features-boxes">
        <div className="features-box">
          <div className="red-circle"></div>
          <p className="features-box-number">34</p>
          <p className="features-box-title">
            Buildings <br /> Finished Now
          </p>
        </div>
        <div className="features-box">
          <div className="red-circle"></div>
          <p className="features-box-number">12</p>
          <p className="features-box-title">
            Years <br /> Experience
          </p>
        </div>
        <div className="features-box">
          <div className="red-circle"></div>
          <p className="features-box-number">24</p>
          <p className="features-box-title">
            Awards <br /> Won 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoView;