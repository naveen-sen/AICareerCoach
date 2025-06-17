import React, { useState, useEffect } from "react";

const TextEffect = ({ text, typingSpeed = 100, pauseTime = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing"); // 'typing' | 'deleting' | 'pause'
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, index + 1));
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pause"), pauseTime);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), pauseTime);
    } else if (phase === "deleting") {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, index - 1));
          setIndex(index - 1);
        }, typingSpeed / 2);
      } else {
        timeout = setTimeout(() => setPhase("typing"), pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, index, text, typingSpeed, pauseTime]);

  return (
    <span style={{ borderRight: "2px solid black", whiteSpace: "pre" }}>
      {displayedText}
    </span>
  );
};

export default TextEffect;
