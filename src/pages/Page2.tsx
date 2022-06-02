import React, { forwardRef } from "react";
import * as style from "./Page2.style"
const Page2 =forwardRef<HTMLTableSectionElement>( (prop, ref) => {
  return <style.PageBox  ref={ref}>2</style.PageBox>
})

export default Page2;
