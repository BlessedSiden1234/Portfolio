import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Cloud Engineer",
          "Software Engineer",
          "MERN Stack Developer",
          "Python Engineer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
