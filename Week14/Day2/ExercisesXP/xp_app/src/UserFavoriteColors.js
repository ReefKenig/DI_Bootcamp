import React from "react";

const UserFavoriteColors = (props) => {
  const { fav_animals } = props;
  const fav_list = fav_animals.map((animal, index) => {
    return <li key={index}>{animal}</li>;
  });
  return <>{fav_list}</>;
};

export default UserFavoriteColors;
