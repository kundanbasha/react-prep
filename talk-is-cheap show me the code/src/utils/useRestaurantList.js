import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  useEffect(() => {
    (async () => {
      const resList = await fetchRestaurantList();
      const filteredResList = await filterRestaurentsFromData(
        resList?.cards || []
      );
      setRestaurantList(filteredResList);
    })();
  }, []);

  const fetchRestaurantList = async () => {
    const res = await fetch(RESTAURANT_LIST_API);
    const json = await res.json();
    return json.data;
  };
  const filterRestaurentsFromData = (list) => {
    return list
      .filter((res) => res?.card?.card?.info)
      .map((res) => res?.card?.card?.info);
  };
  return restaurantList;
};
export default useRestaurantList;
