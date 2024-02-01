import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";

const Body = () => {
  const listOfRestaurants = useRestaurantList();

  if (!listOfRestaurants) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating > 4
            );
            setListofRestaurants(filteredRestaurants);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
