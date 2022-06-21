import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input
        className="search-form__input"
        data-testid="search-form__input"
        type="text"
        placeholder="Enter city..."
        onChange={handleInputChange}
        value={searchText}
      />
      <button
        className="search-form__button"
        data-testid="search-form__button"
        type="submit"
        onClick={onSubmit}
      >
        <span className="material-icons" data-testid="search-form__icon">
          search
        </span>
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
