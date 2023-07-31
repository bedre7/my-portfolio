import React, { useRef, useState, useEffect } from "react";
import KUTE from "kute.js";
import { init } from "ityped";
import { ReactComponent as Blob } from "../assets/svg/blob.svg";

const Home = () => {
  const blobRef = useRef<SVGSVGElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const animateBlob = () => {
    if (!blobRef.current || animationTriggered) return;
    const blob1 = blobRef.current.querySelector("#blob1");
    const blob2 = blobRef.current.querySelector("#blob2");

    if (!blob1 || !blob2) return;
    KUTE.fromTo(
      blob1,
      { path: blob2 },
      { path: blob1 },
      { repeat: 999, duration: 3000, yoyo: true },
    ).start(); // Add morphPrecision option
    setAnimationTriggered(true);
  };

  useEffect(() => {
    init(typingRef.current!, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "Freelancer", "Competitive Programmer"],
    });
  }, []);

  return (
    <div className="mx-auto" onMouseEnter={animateBlob}>
      <div className="spacer layer2 flip"></div>
      <section className="pink relative mx-auto flex items-center justify-center">
        <div className="z-10 ml-10 flex w-1/3 flex-col items-start justify-center space-y-2">
          <h3 className="text-3xl font-semibold text-white">
            Hello World, I'm
          </h3>
          <h1 className="text-6xl font-semibold text-white">Bedru Umer</h1>
          <h3 className="text-3xl font-semibold text-white">
            A <span className="text-purple-400" ref={typingRef}></span>
          </h3>
        </div>
        <Blob ref={blobRef} className="absolute" />
      </section>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default Home;
