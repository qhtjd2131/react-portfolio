import React, { useRef } from "react";
import * as style from "./Main.style";
import Tsparticles from "../components/Tsparticles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSetMainAnimation, useSetMainTextAnimation } from "./Main.hooks";
import { mainText } from "../information";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useSetMainAnimation(mainRef);
  useSetMainTextAnimation(textRefs);

  //data 를 어떤식으로 저장하고 관리할것인가?

  const textContents = Object.keys(mainText).map((key: string, index) => {
    return (
      <style.OneText
        key={key}
        ref={(el: HTMLDivElement) => (textRefs.current[index] = el)}
      >
        {mainText[key]}
      </style.OneText>
    );
  });
  return (
    <style.OneMain id="main" ref={mainRef}>
      <Tsparticles />
      {textContents}
    </style.OneMain>
  );
};

export default Main;
