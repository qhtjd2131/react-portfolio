import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useCustomHeight } from "./hooks/useCustomHeight";
import ScrollNav from "./components/ScrollNav";
import Main from "./pages/Main";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* overflow: hidden; */
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
      <Main />
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
