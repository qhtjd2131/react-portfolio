import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSetLinkAnimation, useSetNavLink } from "./scrollNav.hooks";

const ScrollNavBox = styled.div`
  position: fixed;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SectionLink = styled.a`
  font-size: 20px;
  cursor: pointer;
`;
interface ScrollNavProps {}
const ScrollNav = (props: ScrollNavProps) => {
  const frontPathRef = useRef(null);
  const backPathRef = useRef(null);
  const SectionLinkRef0 = useRef<HTMLAnchorElement>(null);
  const SectionLinkRef1 = useRef<HTMLAnchorElement>(null);
  const SectionLinkRef2 = useRef<HTMLAnchorElement>(null);
  const SectionLinkRef3 = useRef<HTMLAnchorElement>(null);

  useSetNavLink([
    SectionLinkRef0,
    SectionLinkRef1,
    SectionLinkRef2,
    SectionLinkRef3,
  ]);
  useSetLinkAnimation([
    SectionLinkRef0,
    SectionLinkRef1,
    SectionLinkRef2,
    SectionLinkRef3,
  ]);

  useEffect(() => {
    gsap.to(frontPathRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "75% top", // page가 4개라서 75%임. 5개면 80%
        markers: true,
        scrub: true,
      },
      ease: "none",
      height: "100%",
    });
  }, []);

  return (
    <ScrollNavBox>
      <ContentsWrapper>
        <SectionWrapper>
          <BackPath ref={backPathRef}>
            <FrontPath ref={frontPathRef} />
          </BackPath>
        </SectionWrapper>
        <TextWrapper>
          <SectionLink ref={SectionLinkRef0} style={{ fontWeight: "600" }}>
            MAIN
          </SectionLink>
          <SectionLink ref={SectionLinkRef1}>PAGE 1</SectionLink>
          <SectionLink ref={SectionLinkRef2}>PAGE 2</SectionLink>
          <SectionLink ref={SectionLinkRef3}>PAGE 3</SectionLink>
        </TextWrapper>
      </ContentsWrapper>
    </ScrollNavBox>
  );
};

export default ScrollNav;