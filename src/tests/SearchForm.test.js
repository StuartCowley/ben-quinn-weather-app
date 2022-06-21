import React from "react";
import { getByText, render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "searchText",
    setSearchText: () => {},
    handleCitySearch: () => {},
  };

  it("Renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
        searchText={validProps.searchText}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders button with correct text", () => {
    const { getByTestId } = render(
      <SearchForm
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
        searchText={validProps.searchText}
      />
    );
    const button = getByTestId("search-form__button");
    const icon = getByTestId("search-form__icon");

    expect(button).toContainElement(icon);
    expect(button).toHaveAttribute("type", "submit");
  });

  it("Renders input element", () => {
    const { getByTestId } = render(
      <SearchForm
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
        searchText={validProps.searchText}
      />
    );
    const input = getByTestId("search-form__input");

    expect(input).toHaveAttribute("type", "text");
  });
});
