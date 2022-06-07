import React from "react";
import ScrollNav from "./ScrollNav";
import * as style from "./SideBar.style";

interface SideBarProps {
  pageRefs: React.MutableRefObject<HTMLTableSectionElement[]>;
}
const SideBar = (props: SideBarProps) => {
  return (
    <style.SideBarBox>
      <style.PortFolioTextLogo>PortFolio</style.PortFolioTextLogo>
      <ScrollNav pageRefs={props.pageRefs} />;
    </style.SideBarBox>
  );
};

export default SideBar;
