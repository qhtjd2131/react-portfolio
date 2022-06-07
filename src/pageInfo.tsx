import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

export const getPageContents = (
  pageRefs: React.MutableRefObject<HTMLTableSectionElement[]>
) => {
  const pages = [
    <Page1 ref={(el: HTMLTableSectionElement) => (pageRefs.current[0] = el)} />,
    <Page2 ref={(el: HTMLTableSectionElement) => (pageRefs.current[1] = el)} />,
    <Page3 ref={(el: HTMLTableSectionElement) => (pageRefs.current[2] = el)} />,
    <Page3 ref={(el: HTMLTableSectionElement) => (pageRefs.current[3] = el)} />,
    <Page3 ref={(el: HTMLTableSectionElement) => (pageRefs.current[4] = el)} />,
    //여기에 페이지를 추가 해 주세요. 라벨도 반드시 추가해야함.
  ];

  return pages;
};

export const getPageSectionLabel = () => {
  return ["Main", "Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
};
