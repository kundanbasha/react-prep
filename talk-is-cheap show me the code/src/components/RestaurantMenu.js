import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const params = useParams();
  const restaurantInfo = useRestaurantInfo(params.resId);

  if (!restaurantInfo) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>{restaurantInfo[0]?.card?.card?.info?.name}</h1>
      <h3>Menu</h3>
      <ul>
        {restaurantInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          )
        )}
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
