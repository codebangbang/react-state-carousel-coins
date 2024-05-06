// Smoke Test added
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";


it("renders without crashing", function () {
  render(<Card />);
});

// Snapshot Test added
it("matches snapshot", function () {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
    });

    