import React from "react";
import { render } from "@testing-library/react";
import Page3 from "./Page3";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

describe("<Page3 />", () => {
  it("page 3 render", () => {
    const { getByText } = render(<Page3 />);
    getByText("hello");
  });
});
