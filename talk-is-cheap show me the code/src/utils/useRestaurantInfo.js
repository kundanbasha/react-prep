import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantInfo = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetchRestaurantInfo();
      setRestaurantInfo(res.cards);
    })();
  }, []);

  const fetchRestaurantInfo = async () => {
    const res = await fetch(
      `${RESTAURANT_MENU_API}&restaurantId=${restaurantId}`
    );
    const json = await res.json();
    return json.data;
  };

  return restaurantInfo;
};

export default useRestaurantInfo;
