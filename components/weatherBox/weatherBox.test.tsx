// WeatherBox.test.ts
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import WeatherBox from "./weatherBox";

jest.mock("react-redux");

describe("WeatherBox component", () => {
  test("renders WeatherBox component with appropriate styles", () => {
    // Manually cast useSelector to a mock function
    const useSelectorMock = useSelector as any;

    // Assuming your state structure, modify the mockReturnValue accordingly
    useSelectorMock.mockReturnValue({
      weather: {
        value: {
          name: "Test City",
          sys: { country: "Test Country" },
          weather: [{ icon: "test-icon" }],
          dt: 1642981200,
          timezone: 7200,
          main: { temp: 2 },
        },
      },
    });

    render(<WeatherBox />);

    // ... rest of the test
  });
});
