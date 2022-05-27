import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SvgTest3 from "./SvgTest3";
import useWindowDimensions from "../hooks/useWindowDimensions";
import * as Constants from "../constants";
import useScrollTopPosition from "../hooks/useScrollTopPosition";

const ScrollNavBox = styled.div`
  position: fixed;
  width: 60px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  background-color: transparent;
  border-radius: 30px;
  z-index: 999;
  opacity: 0.5;
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
const SectionWrapper = styled.div`
  height: 600px;
  width: 60px;
`;

const Section = styled.div``;

const BackPath = styled.div`
  width: 4px;
  height: 100%;
  background-color: white;
  margin: 0 auto;
`;
const FrontPath = styled.div<{ height?: string }>`
  width: 4px;
  height: ${(props) => props.height && props.height};
  margin: 0 auto;

  background-color: gray;
`;

interface ScrollNavProps {}
const ScrollNav = (props: ScrollNavProps) => {
  const { width, height } = useWindowDimensions();
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollY = useScrollTopPosition();
  // console.log(scrollY / (scrollHeight-height) * 100 );

  const iconStyle = {
    width: "50%",
    height: "50%",
  };

  useEffect(() => {
    setScrollHeight(height * Constants.PAGE_COUNT);
  });

  return (
    <ScrollNavBox>
      <UpButton>
        <IoIosArrowUp style={iconStyle} />
      </UpButton>
      {/* <SvgTest3 /> */}
      <SectionWrapper>
        <BackPath>
          <FrontPath height={(scrollY / (scrollHeight-height) * 100) + "%"}></FrontPath>
        </BackPath>
      </SectionWrapper>
      <DownButton>
        <IoIosArrowDown style={iconStyle} />
      </DownButton>
    </ScrollNavBox>
  );
};

export default ScrollNav;
