import React, { forwardRef, useRef } from "react";
import { useDividerAnimation, useHeaderAnimation } from "./Page1.hooks";
import * as style from "./Page1.style";

const Page1 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  const headerTextRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  useHeaderAnimation(headerTextRef);
  useDividerAnimation(dividerRef);

  return (
    <style.PageBox ref={ref}>
      <style.ContentsWrapper>
        <style.HeaderSection>
          <style.HeaderText ref={headerTextRef}>첫번째 페이지</style.HeaderText>
        </style.HeaderSection>

        <style.SectionDivider ref={dividerRef} />
      </style.ContentsWrapper>
    </style.PageBox>
  );
});
export default Page1;
