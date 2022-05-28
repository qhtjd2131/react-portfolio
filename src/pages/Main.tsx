import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import * as style from "./Main.style";
import Tsparticles from "../components/Tsparticles";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Main = () => {
  const [property, setProperty] = useState({
    fontSize: "0px",
    left: 0,
  });
  const { width, height } = useWindowDimensions();


  const oneRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  const timeline1: gsap.core.Timeline = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
    },
  });
  const timeline2: gsap.core.Timeline = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.inOut",
    },
  });

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  //반응형 effect
  useEffect(() => {
    setProperty(() => {
      let fontSizeTemp: string = "24px";
      let rightSpace: number = 400;
      if (width >= 1600) {
        fontSizeTemp = "46px";
        rightSpace = 640;
      } else if (width >= 900) {
        fontSizeTemp = "36px";
        rightSpace = 480;
      } else {
        fontSizeTemp = "24px";
      }
      return {
        fontSize: fontSizeTemp,
        left: width - rightSpace,
      };
    });
  }, [width]);

  //메인화면 애니메이션
  useEffect(() => {
    gsap.to(oneRef.current, {
      scrollTrigger: {
        id: "background",
        trigger: oneRef.current,
        scrub: true,
        start: "bottom bottom",

        pin: true,
        markers: false,
        pinSpacing: false,
        // snap: 1,
      },
      autoAlpha: 0,
      // position: "fixed",
      // scale: 2.5,
      onStart: () => {
        console.log("animation start");
      },
    });
  }, []);
  useEffect(() => {
    timeline2
      .set(text1Ref.current, {
        fontSize: property.fontSize,
        right: 0,
        y: 450,
      })
      .set(text2Ref.current, {
        fontSize: property.fontSize,
        right: 0,
        y: 500,
      })
      .set(text3Ref.current, {
        fontSize: property.fontSize,
        right: 0,
        y: 600,
      })
      .to(
        text1Ref.current,
        {
          left: property.left,
          opacity: 1,
          duration: 1,
        },
        0
      )
      .to(
        text2Ref.current,
        {
          left: property.left,
          opacity: 1,
          duration: 1,
        },
        0.1
      )
      .to(
        text3Ref.current,
        {
          left: property.left,
          opacity: 1,
          duration: 1,
        },
        0.2
      )
      .restart();
  }, [property]);

  return (
    <style.OneMain id="main" ref={oneRef}>
      <Tsparticles />
      <style.PortFolioTextLogo>PortFolio</style.PortFolioTextLogo>
      <style.OneText ref={text1Ref}>CHOI BOSUNG</style.OneText>
      <style.OneText ref={text2Ref}>1996/09</style.OneText>
      <style.OneText ref={text3Ref}>FRONTEND DEVELOPER</style.OneText>
    </style.OneMain>
  );
};
