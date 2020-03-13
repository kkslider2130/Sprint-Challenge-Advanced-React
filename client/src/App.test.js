import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PageOne from "./components/PageOne";
import mockAxios from "jest-mock-axios";

import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter as Router } from "react-router-dom";
import MockAxios from "jest-mock-axios";

it("check if react router is working on App", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("initial components are rendered before get request", () => {
  const { getByText, getByLabelText, getByTestId } = render(
    <Router>
      <App />
    </Router>
  );
  getByText(/page 2/i);
  getByText(/Most searched/i);
});

afterEach(cleanup);

it("fetches and displays data", async () => {
  /*   MockAxios.get.mockResolvedValueOnce({ data: { player: "test" } });
   */ const url = "/test";

  const { getByTestId, getByText } = render(
    <Router>
      <App>
        <PageOne url={url} />
      </App>
    </Router>
  );

  const resolvedElement = await waitForElement(() => getByText("Alex Morgan"));

  expect(resolvedElement).toHaveTextContent("Alex Morgan");
  getByText(/searches: 100/i);
  getByText(/chile/i);
  /*   expect(MockAxios.get).toHaveBeenCalledTimes(1);
   */
});

it("Button is transitioning correctly", () => {
  const { getByTestId, getByText } = render(
    <Router>
      <App />
    </Router>
  );
  fireEvent.click(getByText("page 2"));
  expect(getByText("page 3")).toHaveTextContent("page 3");
  expect(getByText("page 3")).toHaveAttribute("style");
  expect(getByText("page 3")).toHaveStyle("display: inline-block");

  fireEvent.click(getByText("page 3"));
  expect(getByText("page 4")).toHaveTextContent("page 4");
  expect(getByText("page 4")).toHaveAttribute("style");
  expect(getByText("page 4")).toHaveStyle("display: inline-block");

  fireEvent.click(getByText("page 4"));
  expect(getByText("page 5")).toHaveStyle("display: none");
});
