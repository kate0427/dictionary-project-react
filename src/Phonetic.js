import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <AudioPlayer
        src={props.phonetic.audio}
        autoPlay={false}
        showSkipControls={false}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
        customAdditionalControls={[]}
        style={{
          width: "300px",
        }}
      />
      <br />
      {props.phonetic.text}
    </div>
  );
}
