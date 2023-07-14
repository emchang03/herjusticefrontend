import React from "react";
import { useNavigate } from "react-router-dom";
import TimelineContainer from "../../Components/TimelineContainer";


const UVisa  = () => {
    const navigate = useNavigate();
    const timeline = [
      {
        number: 1,
        title: "Client and Attorney Meetings",
        desc: "Client meets with attorney for about 3-4 meetings to fill out documents and gather appropriate information.",
        duration: "Around 9 weeks"
      },
      {
        number: 2,
        title: "Receipt of Notice",
        desc: "After filing, the attorney awaits receipt notice for Form I-797.",
        duration: "Around 1-2 months"
      },
      {
        number: 3,
        title: "Biometrics",
        desc: "Client / attorney should receive a notice to fulfill biometrics requests.",
        duration: "Within 2-3 months"
      },
      {
        number: 4,
        title: "Case Processing",
        desc: "Case gets processed with little to no updates. The USCIS Case Processing Times tool can be checked for more specific information",
        duration: "Around 6-12 months"
      },
      {
        number: 5,
        title: "Intermediate Waiting Period",
        desc: "Client exists in an intermediate waiting period, either the Bona Fide Determination or U Waitlist, before a final notice.",
        duration: "Around 3-5 Years"
      },
    ];
    return(
        <div className="center-container">
            <div>
              <h1> U-Visa Case Timeline</h1>
              <p className="subtitle">How Her Justice U-Visa Filing Cases <span style={{fontWeight: "bold"}}>typically</span> progress</p>
              <p style={{fontWeight: "bold"}}>Please note that U-Certification expiration is 6 months from the date that it is signed. The filing must be submitted to the USCIS before that time. </p>
              <TimelineContainer
                timelineItems={timeline} />
            </div>

            <div>
              <h1> Additional Resources </h1>
              <a href="https://egov.uscis.gov/processing-times/">USCIS Case Processing Times Tool</a> 
            </div>


            <div className="mainQuizComponent">
              <h1> What is going on with my U-Visa Filing? </h1>
              <p className="subtitle"> Answer a few simple questions to see our best estimate. Remember that cases are subjected to many factors that can cause delays. </p>

              <button onClick={()=>{navigate('/uvisa-filing/quiz')}}> I am working on filing</button>
              <br/>
              <button onClick={()=>{navigate('/uvisa-postfiling/quiz')}}> I have already filed</button>
            </div>
        </div>
      
    )
};

export default UVisa;

