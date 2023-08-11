import RestrauntCard from  "./RestrauantCard";

import { useState } from "react";
import RestaurentList1 from "./restrauant.js";

const Body1 = () => {
  const [RestaurentList,setRest] = useState(RestaurentList1);

  return (
    <div className="Body">
    <div className="filter">
    <button type="button" onClick={( )=>{
const  starRestaurents=RestaurentList.filter((res)=>res.info.avgRating>=4.3);
setRest(starRestaurents);
}}>
        Top rated Restaurent</button>
        <button type="button" onClick={( )=>{
const  starRestaurents1=RestaurentList.filter((res)=>res.info.deliveryTime>10);
setRest(starRestaurents1);
}}>
        delivery rated Restaurent</button>
       
    </div>
     <div className="restaurant-list">
       {RestaurentList.map((restaurent) => {
         return <RestrauntCard {...restaurent.info} key={restaurent.info.id} />;
       })}
     </div>
     </div>
   );
 };
 export default Body1;