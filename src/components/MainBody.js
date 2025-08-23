import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

// BODY Component
const MainBody = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchResListData();
  }, []);

  const fetchResListData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6711686&lng=77.4691216&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();

    const restaurantCard = data?.data?.cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log("Fetched restaurants:", restaurants);
    setResList(restaurants || []);
  };

  return (
    <div className="main-body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = resList.filter(
              (ele) => ele?.info?.avgRating > 4.4
            );
            setResList(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container" style={{ background: "#fbdcdcff" }}>
        {resList?.map((ele) => (
          <RestaurantCard key={ele?.info?.id} resData={ele} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
