import React, { forwardRef, useImperativeHandle, useRef } from "react";
import HeaderSection from "../components/page/HeaderSection";
import { usePageStartAnimation } from "./Page2.hooks";
import * as style from "./Page2.style";
import * as commonStyle from "./PageCommon.style";

const Page2 = forwardRef<HTMLTableSectionElement>((prop, ref) => {
  const startRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLTableSectionElement>(null);

  useImperativeHandle(ref, () => pageRef.current as HTMLTableSectionElement);
  usePageStartAnimation(pageRef, startRef);

  return (
    <commonStyle.PageBox ref={pageRef}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text=" 2 page " />

        <commonStyle.BodySection>
          <style.StartDiv ref={startRef}></style.StartDiv>
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page2;
