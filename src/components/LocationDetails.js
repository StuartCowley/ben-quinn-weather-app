import React from "react";
import PropTypes from "prop-types";

function LocationDetails({ city, country }) {
  return <h1>{`${city}, ${country}`}</h1>;
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
