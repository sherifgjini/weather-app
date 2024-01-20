import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Search from "./index";

jest.mock("../../../services/getGeoLocation.service", () => ({
  getGeoLocation: jest.fn(() => Promise.resolve([])),
}));

describe("Search Component", () => {
  test("renders correctly", async () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("Search City...");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: "Berlin" },
    });
    expect(inputElement).toHaveValue("Berlin");

    const cities = screen.getByTestId("cities");
    expect(cities).toBeInTheDocument();
    const links = cities.querySelectorAll("a");

    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link.getAttribute("href")).toContain("/city");
    });
  });

  test("autocomplete is empty", () => {
    render(<Search />);
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeEmptyDOMElement();
  });

  test("does not render", () => {
    render(<Search />);
    const loadingElement = screen.queryByTestId("loading");
    expect(loadingElement).not.toBeInTheDocument();
  });
});
