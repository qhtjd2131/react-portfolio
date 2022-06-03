import React, { forwardRef } from "react";
import HeaderSection from "../components/page/HeaderSection";
import * as style from "./Page3.style";
import * as commonStyle from "./PageCommon.style";

const Page3 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  return (
    <commonStyle.PageBox ref={ref}>
      <HeaderSection text="page 3" />
    </commonStyle.PageBox>
  );
});

export default Page3;
