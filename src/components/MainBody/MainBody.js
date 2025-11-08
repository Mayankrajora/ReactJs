import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import "./MainBody.css";

const MainBody = () => {
  const [resList, setResList] = useState([]);
  const [allResList, setAllResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showShimmer, setShowShimmer] = useState(true);

  useEffect(() => {
    fetchResListData();

    const shimmerTimeout = setTimeout(() => {
      setShowShimmer(false);
    }, 5000);

    return () => clearTimeout(shimmerTimeout);
  }, []);

  const fetchResListData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6711686&lng=77.4691216&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const restaurantCard = data?.data?.cards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setResList(restaurants || []);
      setAllResList(restaurants || []);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setResList(allResList);
    } else {
      const filtered = allResList.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setResList(filtered);
    }
    setSearchText("");
  };

  const handleTopRated = () => {
    const filtered = allResList.filter((res) => res?.info?.avgRating > 4.4);
    setResList(filtered);
  };

  return (
    <div className="main-body">
      {resList.length === 0 && showShimmer ? (
        <div className="shimmer-container">
          <Shimmer />
        </div>
      ) : resList.length === 0 && !showShimmer ? (
        <div style={{ padding: "20px", textAlign: "center", fontSize: "18px" }}>
          No Restaurants Found
        </div>
      ) : (
        <>
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="filter-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className="or-text">OR</div>
            <button className="filter-btn" onClick={handleTopRated}>
              Top Rated Restaurants
            </button>
          </div>

          <div className="res-container" style={{ background: "#fbdcdcff" }}>
            {resList.map((ele) => (
              <RestaurantCard key={ele?.info?.id} resData={ele} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MainBody;
