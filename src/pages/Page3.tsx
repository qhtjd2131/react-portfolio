import React, { forwardRef } from "react";
import * as style from "./Page2.style";

const Page3 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  return <style.PageBox ref={ref}>3</style.PageBox>;
});

export default Page3;
