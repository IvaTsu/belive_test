import React from "react";
import placeholder from "../assets/placeholder.jpg";
import { isEmpty } from "../validation/isEmpty";

const FullVideoView = ({ data }) =>
  isEmpty(data) ? (
    <img src={placeholder} alt="placeholder" />
  ) : (
    <video src={data.src} autoPlay />
  );

export default FullVideoView;
