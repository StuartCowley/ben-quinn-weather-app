import React from "react";
import { render } from "@testing-library/react";
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
    const { getByText } = render(
      <SearchForm
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
        searchText={validProps.searchText}
      />
    );
    const button = getByText(/search/i);

    expect(button).toHaveClass("search-form__button");
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
