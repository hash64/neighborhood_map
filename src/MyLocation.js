//FourSquare Api Content and url 
const CLIENT_ID="1BTFEV3AC35E3IBIH34XFAMWSDVYFVN2VWZZGUSRISJDFB4G";
const CLIENT_SECRET="LUNV12KESGMZ11GRK0PJUMC2A03KZC1D2SHPM1HX5LVOLJBC";

export const getLocations=() =>{
  return fetch(` https://api.foursquare.com/v2/venues/explore?ll=19.0760,72.8777&near=mumbai&radius=60&section=FOOD&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181212`)
};