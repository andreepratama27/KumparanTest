import React, { Component } from "react";

const BannerImage = ({ name }) => {
  let first, second;

  if (name) {
    [first, second] = name.split(" ");
  }

  return (
    <div className="image-place__id">
      {first && first[0]}
      {second && second[0]}
    </div>
  );
};

export default BannerImage;
