import React from "react";

const TimelineBox = ({title, desc, duration, number}) => {
    return(
        <div className="timeline-text">
            <h1>{number}</h1>
            <h2>{title}</h2>
            <p> {desc} </p>
            { duration ? (<p style={{fontWeight: "bold"}}> Average duration of this step: <br/> {duration} </p>) : <></>}
            
        </div>
    )
};

export default TimelineBox;
