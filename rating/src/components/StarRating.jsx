import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //Feedbackn
  const getFeedback=(rate)=>{
    switch(rate){
            case 1:
            return "worst";
             case 2:
            return "Bad";
             case 3:
            return "Average";
             case 4:
            return "Good";
             case 5:
            return "Excellent";
  }
  }
  return (
    <div className="container" style={{border:"2px solid yellowgreen",textAlign: "center",marginTop:"30px"}}>  
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={starValue}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{color: starValue <= (hover || rating) ? "gold" : "gray",cursor: "pointer", fontSize: "4rem", marginRight: "5px"}}>
            ★
          </span>
        );
      })}
      <div style={{ color:"blue",fontSize: "22px", marginTop: "12px" }}>
        {rating >0 &&(
            <>
             <strong>{getFeedback(rating)}</strong>
            </>
        )
        }
      </div>
    </div>
   
  );
};

export default StarRating;