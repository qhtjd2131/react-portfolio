import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  useSetLinkAnimation,
  useSetNavLink,
  useSetPathAnimaition,
} from "./scrollNav.hooks";
import * as constants from "../constants";
import * as data from "./ScrollNav.data";
import * as style from "./ScrollNav.style";

const ScrollNav = () => {
  const sectionLinkRefs = useRef<HTMLAnchorElement[]>([]);
  const frontPathRef = useRef<HTMLDivElement>(null);

  useSetPathAnimaition(frontPathRef);
  useSetNavLink(sectionLinkRefs);
  useSetLinkAnimation(sectionLinkRefs);


  const sectionLinkContents = new Array(constants.PAGE_COUNT)
    .fill(0)
    .map((_, index) => {
      return (
        <style.SectionLink
          key={index}
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
          <style.BackPath>
            <style.FrontPath
              ref={frontPathRef}
              id="frontPath"
            ></style.FrontPath>
          </style.BackPath>
        </style.SectionWrapper>
        <style.TextWrapper>{sectionLinkContents}</style.TextWrapper>
      </style.ContentsWrapper>
    </style.ScrollNavBox>
  );
};

export default ScrollNav;
