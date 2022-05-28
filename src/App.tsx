import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import Tsparticles from "./components/tsparticles";
import { useCustomHeight } from "./hooks/useCustomHeight";
import useWindowDimensions from "./hooks/useWindowDimensions";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import ScrollNav from "./components/ScrollNav";
import { ScrollToPlugin } from "gsap/all";

const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* overflow: hidden; */
`;

const OneMain = styled.div`

  background-color: #232323;
  width: 300%;
  height: calc(var(--vh) * 100);
`;

const PortFolioTextLogo = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
`;
const OneText = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 600;
  position: absolute;
  right: 0;
  opacity: 0;
  white-space: nowrap;
`;

const TwoMain = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  background-color: #e5e5e5;
`;



const TempBox = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: white;
`;

const App = () => {
  const { width, height } = useWindowDimensions();
  useCustomHeight();

  const [property, setProperty] = useState({
    fontSize: "0px",
    left: 0,
  });

  const oneRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const appRef = useRef(null);

  const tempRef1 = useRef(null);
  const tempRef2 = useRef(null);
  const tempRef3 = useRef(null);

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

    gsap.utils
      .toArray([tempRef1.current, tempRef2.current, tempRef3.current])
      .forEach((tempRef: any) => {
        ScrollTrigger.create({
          trigger: tempRef,
          start: "top top",
          // pin: true,
          // snap: 1,
          // pinSpacing : "20%",
          pinSpacing: false,
        });
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
    <GlobalWrapper ref={appRef}>
      <ScrollNav />
      <OneMain id="main" ref={oneRef}>
        <Tsparticles />
        <PortFolioTextLogo>PortFolio</PortFolioTextLogo>
        <OneText ref={text1Ref}>CHOI BOSUNG</OneText>
        <OneText ref={text2Ref}>1996/09</OneText>
        <OneText ref={text3Ref}>FRONTEND DEVELOPER</OneText>
      </OneMain>
      <TempBox id="temp1" ref={tempRef1}>
        1
      </TempBox>
      <TempBox id="temp2" ref={tempRef2}>
        2
      </TempBox>
      <TempBox id="temp3" ref={tempRef3}>
        3
      </TempBox>

    
    </GlobalWrapper>
  );
};

export default App;
