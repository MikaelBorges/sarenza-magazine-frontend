import React, { useState } from "react";
import { Image } from "./Image/Image";

const IframeVideo = ({ src, iframe }) => {
  const [play, setPlay] = useState(!src);
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        paddingTop: 25,
        height: 0
      }}
    >
      {play ? (
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={iframe}
          frameBorder="0"
        />
      ) : (
        <Image src={src} alt={"Video"} onClick={() => setPlay(p => !p)} />
      )}
    </div>
  );
};

export default IframeVideo;
