import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="res-title">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const resList = [
  {
    id: "84865",
    name: "Charcoal Eats - Biryani & Beyond",
    cloudinaryImageId: "d10b6393ef4baae1b590a9f2687a8e43",
    locality: "Neptune Magnet Mall",
    areaName: "Bhandup West",
    costForTwo: "₹499 for two",
    cuisines: ["Biryani", "Kebabs", "Hyderabadi", "North Indian"],
    avgRating: 4.3,
    parentId: "5338",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    promoted: true,
    adTrackingId:
      "cid=10576710~p=2~eid=0000018d-130a-03b0-0033-b4f6008e0266~srvts=1705421439920~83649",
    sla: {
      deliveryTime: 38,
      lastMileTravel: 4.1,
      serviceability: "SERVICEABLE",
      slaString: "38 mins",
      lastMileTravelString: "4.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-16 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                iconId: "guiltfree/GF_Logo_android_3x",
                description: "",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹100",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "619851",
    name: "Biryani Blues",
    cloudinaryImageId: "qfk9v4fkghtgoybpwtui",
    areaName: "Bhandup",
    costForTwo: "₹400 for two",
    cuisines: [
      "Biryani",
      "Hyderabadi",
      "Lucknowi",
      "Kebabs",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.2,
    parentId: "13813",
    avgRatingString: "4.2",
    totalRatingsString: "100+",
    promoted: true,
    adTrackingId:
      "cid=10653965~p=3~eid=0000018d-130a-03b0-0033-b4f7008e0349~srvts=1705421439920~83649",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 5.8,
      serviceability: "SERVICEABLE",
      slaString: "42 mins",
      lastMileTravelString: "5.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-17 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textExtendedBadges: {},
        textBased: {},
        imageBased: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹100",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "309229",
    name: "The Bengal Club",
    cloudinaryImageId: "0528d0ed67b259173f72fb29be4cc6b7",
    locality: "Satam House",
    areaName: "Powai",
    costForTwo: "₹300 for two",
    cuisines: ["Bengali", "Biryani", "Street Food"],
    avgRating: 4.1,
    parentId: "11503",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    promoted: true,
    adTrackingId:
      "cid=10437690~p=4~eid=0000018d-130a-03b0-0033-b4f8008e0417~srvts=1705421439920~83649",
    sla: {
      deliveryTime: 38,
      lastMileTravel: 4.1,
      serviceability: "SERVICEABLE",
      slaString: "38 mins",
      lastMileTravelString: "4.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-16 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textExtendedBadges: {},
        textBased: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "395997",
    name: "The Calcutta Club",
    cloudinaryImageId: "wjw72zlrx8h712rbvygg",
    locality: "Powai",
    areaName: "Powai",
    costForTwo: "₹400 for two",
    cuisines: [
      "Bengali",
      "Indian",
      "Mughlai",
      "Biryani",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4,
    parentId: "11181",
    avgRatingString: "4.0",
    totalRatingsString: "1K+",
    promoted: true,
    adTrackingId:
      "cid=10636400~p=5~eid=0000018d-130a-03b0-0033-b4f9008e051c~srvts=1705421439920~83649",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "32 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-16 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹100",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
