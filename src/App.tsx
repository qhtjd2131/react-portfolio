import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useCustomHeight } from "./hooks/useCustomHeight";
import useWindowDimensions from "./hooks/useWindowDimensions";
gsap.registerPlugin(ScrollTrigger);
import mainBackground from "./images/main_bg.jpg";
import SvgTest from "./SvgTest";

const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;
const Sqaure = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.color ? props.color : "gray")};
  margin-bottom: 200px;
`;

const OneMain = styled.div`
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  width: 100%;
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
  @media ${({ theme }) => theme.size_6} {
    /* font-size: 24px; */
  }
`;

const TwoMain = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  background-color: #e5e5e5;
`;

const TwoText = styled.div`
  font-size: 36px;
  color: black;
  font-weight: 500;
  visibility: hidden;
`;

const App = () => {
  const { width, height } = useWindowDimensions();
  useCustomHeight();

  const [isCompletedTimeLine2, setIsCompletedTimeLine2] = useState(true);

  console.log(width);

  const oneRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const appRef = useRef(null);
  const timeline1: gsap.core.Timeline = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
    },
  });
  const timeline2: gsap.core.Timeline = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power3.inOut",
    },
  });

  //   let tl = gsap.timeline({
  //     // yes, we can add it to an entire timeline!
  //     scrollTrigger: {
  //       trigger: appRef.current,
  //       pin: true, // pin the trigger element while active
  //       start: "top top", // when the top of the trigger hits the top of the viewport
  //       end: "bottom bottom", // end after scrolling 500px beyond the start
  //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //       snap: {
  //         snapTo: "labels", // snap to the closest label in the timeline
  //         duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //         ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //       },
  //     },
  //   });

  useEffect(() => {
    gsap.to(oneRef.current, {
      scrollTrigger: {
        id: "background",
        trigger: oneRef.current,
        scrub: true,
        start: "bottom bottom",
        markers: true,
      },
      opacity: 0,
      scale: 2.5,
    });
  }, []);

  useEffect(() => {
    if (isCompletedTimeLine2) {
      setIsCompletedTimeLine2(false);
      let fontSize;
      let translateX;
      let initialY;
      // const fontSize = width <= 600 ? "24px" : "40px";
      if(width >= 1200){
        fontSize = "36px";
        translateX = "-=640";
      }
      else if (width >= 900) {
        fontSize = "36px";
        translateX = "-=500";
      } else if (width >= 600) {
        fontSize = "28px";
        translateX = "-=370";
      } else {
        fontSize = "20px";
        translateX = "-20";
      }

      timeline2
        .set(text1Ref.current, {
          fontSize: fontSize,
          y: 350,
          x: "100%",
        })
        .set(text2Ref.current, {
          fontSize: fontSize,
          y: 400,
          x: "100%",
        })
        .set(text3Ref.current, {
          fontSize: fontSize,
          y: 500,
          x: "100%",
        })
        .to(text1Ref.current, {
          x: translateX,
          opacity: 1,
          duration: 1,
        })
        .to(text2Ref.current, {
          x: translateX,
          opacity: 1,
          duration: 1,
        })
        .to(text3Ref.current, {
          x: translateX,
          opacity: 1,
          duration: 1,
          onComplete: () => {
            setIsCompletedTimeLine2(true);
          },
        });
    }
  }, [width]);

  return (
    <GlobalWrapper ref={appRef}>
      <OneMain ref={oneRef}>
        <PortFolioTextLogo>PortFolio</PortFolioTextLogo>
        <OneText ref={text1Ref}>CHOI BOSUNG</OneText>
        <OneText ref={text2Ref}>1996/09</OneText>
        <OneText ref={text3Ref}>FRONTEND DEVELOPER</OneText>
      </OneMain>

      {/* <TwoMain></TwoMain> */}
      <SvgTest />
    </GlobalWrapper>
  );
};

export default App;
