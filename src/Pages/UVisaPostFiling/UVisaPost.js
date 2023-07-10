import React from "react";
import { useNavigate } from "react-router-dom";


const UVisaPost  = () => {
    const navigate = useNavigate(); 
    return(
        <div className="center-container">
            <div>
                <h1>U-Visa Post Filing Timeline</h1>
                <p className="subtitle">How Her Justice U-Visa Filing Cases <span style={{fontWeight: "bold"}}>typically</span> progress after filing</p>
              <p> static timeline component goes here</p>
            </div>


            <div>
                <h1>Additional Resources</h1>
                <a href="https://egov.uscis.gov/processing-times/">USCIS Case Processing Times Tool</a>
            </div>

            <div className="mainQuizComponent">
                <h1> What is going on with my U-Visa After Filing? </h1>
                <p className="subtitle"> Answer a few simple questions to see our best estimate. Remember that cases are subjected to many factors that can cause delays. </p>

                <button onClick={()=>{navigate('/uvisa-postfiling/quiz')}}>Launch Quiz</button>
            </div>
        </div>
    );
};

export default UVisaPost;

