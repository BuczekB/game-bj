import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("render component", async () => {
    const { getByText } = render(<App />)
    expect(getByText("DRAW")).toBeInTheDocument();
})


