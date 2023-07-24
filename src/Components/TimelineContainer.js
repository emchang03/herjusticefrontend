import React, {useState} from "react";
import TimelineBox from "./TimelineBox";

// carousel for the timeline boxes!! 
const TimelineContainer = ({timelineItems}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = timelineItems.length;

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex-3);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex > length-3 ? currentIndex+1 : currentIndex+3);
  }



  


  return(
    <div className="carousel">
      <div className="carousel-container">
      <button className="prev-button" onClick={goToPrevious} disabled={currentIndex === 0}> Back</button>
      {
        timelineItems.slice(currentIndex, currentIndex+3).map((item, index)=>{
          const isActive = index === currentIndex;
          const isPrevious = index === currentIndex - 1;
          const isNext = index === currentIndex + 1;

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
      <button className="next-button" onClick={goToNext} disabled={currentIndex === length - 1}> Next </button>
      </div>
    </div>
  )
};


export default TimelineContainer; 