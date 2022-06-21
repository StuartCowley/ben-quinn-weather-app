import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 90,
    wind: {
      speed: 10,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecasts={validProps} />);

    expect(getByText(/January 1st 1970/i)).toHaveClass(
      "forecast-details__date"
    );
    expect(getByText(/12°C/)).toHaveClass("forecast-details__min-temperature");
    expect(getByText(/22°C/)).toHaveClass("forecast-details__max-temperature");
    expect(getByText(/90%/)).toHaveClass("forecast-details__humidity");
    expect(getByText(/10mph/)).toHaveClass("forecast-details__wind");
  });
});
