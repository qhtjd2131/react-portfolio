import React, { useEffect, useRef } from "react";
import { useSetLinkAnimation, useSetNavLink, useSetPathAnimaition } from "./scrollNav.hooks";
import * as constants from "../constants";
import * as data from "./ScrollNav.data";
import * as style from "./ScrollNav.style";

interface ScrollNavProps {}
const ScrollNav = (props: ScrollNavProps) => {
  const frontPathRef = useRef<HTMLDivElement>(null);
  const backPathRef = useRef<HTMLDivElement>(null);
  const sectionLinkRefs = useRef<HTMLAnchorElement[]>([]);

  useSetNavLink(sectionLinkRefs.current);
  useSetLinkAnimation(sectionLinkRefs.current);
  
  useSetPathAnimaition(frontPathRef.current);


  const sectionLinkContents = new Array(constants.PAGE_COUNT)
    .fill(0)
    .map((_, index) => {
      return (
        <style.SectionLink
          ref={(el: HTMLAnchorElement) => {
            sectionLinkRefs.current[index] = el;
          }}
          style={index === 0 ? { fontWeight: "600" } : {}}
        >
          {data.sectionLabel[index] ? data.sectionLabel[index] : ""}
        </style.SectionLink>
      );
    });

    
  return (
    <style.ScrollNavBox>
      <style.ContentsWrapper>
        <style.SectionWrapper>
          <style.BackPath ref={backPathRef}>
            <style.FrontPath ref={frontPathRef} />
          </style.BackPath>
        </style.SectionWrapper>
        <style.TextWrapper>{sectionLinkContents}</style.TextWrapper>
      </style.ContentsWrapper>
    </style.ScrollNavBox>
  );
};

export default ScrollNav;
