import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";
import WeatherBox from ".";
import TempInfo from "./tempInfo";
import { IWeather } from "@/interfaces/IWeather";
import MainInfo from "./mainInfo";

describe("Weatherbox component with provider", () => {
  test("renders correctly with mocking data", () => {
    const store = makeStore();
    const { getByTestId, getByRole } = render(
      <Provider store={store}>
        <WeatherBox />
      </Provider>
    );
    const weatherBoxElement = getByTestId("weather-box");
    const heading1 = getByRole("heading", { level: 1 });
    expect(weatherBoxElement).toHaveClass("weatherbox");
    expect(weatherBoxElement).toHaveClass("glass");
    expect(heading1).toBeInTheDocument();
  });
  test("temp component", () => {
    const { main, weather } = {
      main: {} as IWeather["main"],
      weather: {} as IWeather["weather"],
    };
    const { getByTestId } = render(<TempInfo main={main} weather={weather} />);
    const tempEl = getByTestId("main-temp");
    const titleEl = getByTestId("main-title");
    expect(tempEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  test("main component info render correctly and it contains three list items", () => {
    const mainInfo = {} as IWeather["main"];
    const { getByRole, getAllByRole } = render(<MainInfo {...mainInfo} />);
    expect(getByRole("list")).toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(3);
  });
});
