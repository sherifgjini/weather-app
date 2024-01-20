import { screen, render } from "@testing-library/react";
import WeatherBox from "./weatherBox";

describe("WeatherBox Component", () => {
  test("runs correctly", () => {
    render(<WeatherBox />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
