import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList1 from "../utils/mockData";

// BODY Component
const MainBody = () => {
  const [resList, setResList] = useState(resList1);

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
