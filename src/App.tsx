import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
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
  useCustomHeight();

 
  const appRef = useRef(null);

  const tempRef1 = useRef(null);
  const tempRef2 = useRef(null);
  const tempRef3 = useRef(null);

  useEffect(() => {
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

  return (
    <GlobalWrapper ref={appRef}>
      <ScrollNav />

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
