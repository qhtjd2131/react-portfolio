import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useWindowDimensions from "../hooks/useWindowDimensions";
import * as Constants from "../constants";

const ScrollNavBox = styled.div`
  position: fixed;
  width: 60px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  background-color: transparent;
  border-radius: 30px;
  z-index: 999;
  opacity: 1;
`;

const NavButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #e5e5e5;
  color: gray;
  cursor: pointer;
  &:hover {
    /* background-color: gray; */
  }
`;

const UpButton = styled(NavButton)``;
const DownButton = styled(NavButton)``;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;
const SectionWrapper = styled.div`
  height: 100%;
  width: 60px;
`;

const BackPath = styled.div`
  width: 4px;
  height: 100%;
  background-color: white;
  margin: 0 auto;
`;
const FrontPath = styled.div`
  width: 4px;
  height: 0%;
  margin: 0 auto;
  background-color: gray;
`;

const TextWrapper = styled.div`
  height: 100%;
  display : flex;
  flex-direction :column;
  justify-content : space-between;
`;

const SectionText = styled.h1`
`;

interface ScrollNavProps {}
const ScrollNav2 = (props: ScrollNavProps) => {
  const { width, height } = useWindowDimensions();

  const frontPathRef = useRef(null);
  const backPathRef = useRef(null);
  const iconStyle = {
    width: "50%",
    height: "50%",
  };

  useEffect(() => {
    gsap.to(frontPathRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "75% top",
        markers: true,
        scrub: true,
      },
      ease: "none",
      height: "100%",
    });
  }, []);

  return (
    <ScrollNavBox>
      {/* <UpButton>
        <IoIosArrowUp style={iconStyle} />
      </UpButton> */}
      <ContentsWrapper>
        <SectionWrapper>
          <BackPath ref={backPathRef}>
            <FrontPath ref={frontPathRef} />
          </BackPath>
        </SectionWrapper>
        <TextWrapper>
          <SectionText>00000</SectionText>

          <SectionText>11111</SectionText>
          <SectionText>22222</SectionText>
          <SectionText>33333</SectionText>
        </TextWrapper>
      </ContentsWrapper>

      {/* <DownButton>
        <IoIosArrowDown style={iconStyle} />
      </DownButton> */}
    </ScrollNavBox>
  );
};

export default ScrollNav2;
