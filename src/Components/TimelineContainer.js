import React, {useState} from "react";
import TimelineBox from "./TimelineBox";

// carousel for the timeline boxes!! 
const TimelineContainer = ({timelineItems}) => {  

  return(
    <div className="carousel">
      <div className="carousel-container">
  
      {
        timelineItems.map((item)=>{
      
          return(
            <div className="box">
            <TimelineBox
              title = {item.title}
              desc = {item.desc}
              duration= {item.duration}  
              number = {item.number}                    
            />
            </div>
              
          );
        })
      }
    
      </div>
    </div>
  )
};


export default TimelineContainer; 