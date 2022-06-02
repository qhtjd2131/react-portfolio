import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useCustomHeight } from "./hooks/useCustomHeight";
import Main from "./pages/Main";
import * as constants from "./constants";
import { useSetAppAnimation } from "./App.hooks";
import SideBar from "./components/sidebar/SideBar";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* overflow: hidden; */
`;

const PageBox = styled.section`
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  margin-left : ${(props) => props.theme.sidebar_width};
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  background-color: gray;
`;

const App = () => {
  useCustomHeight();

  const appRef = useRef(null);
  const pageRefs = useRef<HTMLTableSectionElement[]>([]);

  useSetAppAnimation(pageRefs);

  const pageContents = new Array(constants.PAGE_COUNT - 1)
    .fill(0)
    .map((_, index) => {
      return (
        <PageBox
          ref={(el: HTMLTableSectionElement) => (pageRefs.current[index] = el)}
        >
          {index + 1}
        </PageBox>
      );
    });

  return (
    <GlobalWrapper ref={appRef}>
      <Main />
      <SideBar pageRefs={pageRefs} />
      {pageContents}
    </GlobalWrapper>
  );
};

export default App;
