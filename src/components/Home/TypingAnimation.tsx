import React from "react";
import Typed from "react-typed";

const TypingAnimation = () => {
  return (
    <div className="text-3xl">
      <Typed
        strings={[
          "Full Stack Developer",
          "Freelancer",
          "Competitive Programmer",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop={true}
      />
    </div>
  );
};

export default TypingAnimation;
