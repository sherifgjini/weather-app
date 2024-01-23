import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Search from "./index";
import Cities from "./cities";

jest.mock("../../../services/getGeoLocation.service", () => ({
  getGeoLocation: jest.fn(() => Promise.resolve([])),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
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
  });

  test("render cities correctly", () => {
    render(<Cities />);
    const cities = screen.getByTestId("cities");
    expect(cities).toBeInTheDocument();
    const links = cities.querySelectorAll("a");

    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link.getAttribute("href")).toContain("/city");
    });
  });

  test("autocomplete is empty and does not render", () => {
    render(<Search />);
    const autocomplete = screen.queryByTestId("autocomplete");
    expect(autocomplete).not.toBeInTheDocument();
    const pushMock = jest.fn();
    const useRouterMock = {
      push: pushMock,
    };
    jest
      .spyOn(require("next/router"), "useRouter")
      .mockReturnValue(useRouterMock);
  });

  test("does not render", () => {
    render(<Search />);
    const loadingElement = screen.queryByTestId("loading");
    expect(loadingElement).not.toBeInTheDocument();
  });
});
