import "../matchMedia.mock";
import { render, screen } from "@testing-library/react";
import React from "react";
import Main from "./Main";
describe("<Main />", () => {
  it("main text render", () => {
    render(<Main />);
  });
});
