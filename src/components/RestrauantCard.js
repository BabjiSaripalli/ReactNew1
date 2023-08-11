const RestrauantCard = ({
         name,
         cuisines,
         area,
         avgRating,
         cloudinaryImageId,
         deliveryTime, costForTwo,
        
       }) => {
         return (
           <div className="card">
             <img
               src={
                 "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                 cloudinaryImageId
               }
             />
             <h2>{name}</h2>
             <h3>{cuisines.join(", ")}</h3>
             <h4>{ avgRating} stars</h4>
             <h4>{area} </h4>
             <h4>{deliveryTime} min</h4>
             <h4>{costForTwo} </h4> 
            
           </div>
         );
};
         export default RestrauantCard;