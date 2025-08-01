// Card Component to reuse
import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card-container">
      <img
        className="res-logo"
        src={CDN_IMG_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h2 style={{ textDecoration: "underline" }}>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <span>*{avgRatingString} stars</span>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
