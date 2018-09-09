import React from "react";
import PropTypes from "prop-types";

const ButtonList = ({ data, onClick }) => (
  <button onClick={onClick}>{data.id}</button>
);

ButtonList.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ButtonList;
