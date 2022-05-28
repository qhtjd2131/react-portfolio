import React, { useRef, useLayoutEffect } from "react";
import * as style from "./Main.style";
import Tsparticles from "../components/Tsparticles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSetMainAnimation, useSetMainTextAnimation } from "./Main.hooks";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useSetMainAnimation(mainRef.current);
  useSetMainTextAnimation(textRefs.current);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  // const introduceText = {
  //   name : 'CHOI BOSUNG',
  //   born : "1996/09",
  //   text : "FRONTEND DEVELOPER",
  // }

  //data 를 어떤식으로 저장하고 관리할것인가?

  const introduceText = ["CHOI BOSUNG", "1996/09", "FRONTEND DEVELOPER"];
  const textContents = new Array(3).fill(0).map((_, index) => {
    return (
      <style.OneText
        key={index}
        ref={(el: HTMLDivElement) => (textRefs.current[index] = el)}
      >
        {introduceText[index]}
      </style.OneText>
    );
  });
  return (
    <style.OneMain id="main" ref={mainRef}>
      <Tsparticles />
      <style.PortFolioTextLogo>PortFolio</style.PortFolioTextLogo>
      {textContents}
    </style.OneMain>
  );
};

export default Main;
