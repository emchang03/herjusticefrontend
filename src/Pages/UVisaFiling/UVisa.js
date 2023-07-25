import React from "react";
import { useNavigate } from "react-router-dom";
import TimelineContainer from "../../Components/TimelineContainer";


const UVisa  = () => {
    const navigate = useNavigate();
    const timeline = [
      {
        number: 1,
        title: `Client and Attorney Meetings`,
        desc: `Client meets with attorney for about 3-4 meetings to fill out documents and gather appropriate information.`,
        duration: `Around 9 weeks after the attorney receives the case`
      },
      {
        number: 2,
        title: `Receipt Notice from USCIS`,
        desc: `After filing with USCIS, the attorney awaits receipt notices (Form I-797) confirming that USCIS received the filing.`,
        duration: `Around 1-3 months after filing with USCIS`
      },
      {
        number: 3,
        title: `Complete biometrics`,
        desc: `Attorney receives notice of Biometrics and calls the client with instructions for how to complete a Biometrics Appointment. This is where USCIS will take fingerprints and photographs at a specific Application Support Center.`,
        duration: `Within 2-3 months after filing with USCIS`
      },
      {
        number: 4,
        title: `Case Processing`,
        desc: `During this time, you (the client) or your attorney may receive notices from USCIS asking for additional information, or your might not receive anything from USCIS. Please keep in touch with you attorney every few months during this time. Your attorney must have your updated contact information in case they need to communicate with you.`,
        duration: `Around 60-62 months after filing with USCIS`
      },
      {
        number: 5,
        title: `Bona Fide Determination`,
        desc: `USCIS will notify your attorney about whether the U-Visa petition filing is bona fide, meaning that certain eligibility requirements have been met. If USCIS grants a bona fide determination, an employment authorization document (work permit) will be issued. If the bona fide determination is not made, you will have to await more case processing, and a request for evidence may be issued. In this case, USCIS will ask for more information about the case.`,
        duration: `Around 5+ years after filing with USCIS`
      },
      {
        number: 6,
        title: `Deferred Action Waiting List`,
        desc: `Even if USCIS determines that you are eligible for a U-Visa, the U.S. government can only give 10,000 people U-Visa status every year. Because many more people apply for U-Visas, there is a long backlog. If you are eligible for a U-Visa, you will be placed on a waiting list. There is no way to know where you are on the waiting list. Please periodically check in with your attorney during this waiting list period. When your U-Visa is finally approved, your attorney will receive an approval notice, and you will be issued a new employment authorization document.`,
        duration: `Around 5+ years after filing with USCIS`
      },
      {
        number: 7,
        title: `After U-Visa Approval`,
        desc:`If you are approved for a U-Visa, this status lasts for 4 years. Your attorney may terminate representation. You need to talk to your attorney to determine if any additional legal work needs to be done. You may apply for lawful permanent residence (a "green card") after 3 years continuously living in the U.S. with your U-Visa status. Note that this is a completely new application, and the attorney who represented you for your U-Visa may or may not represent you in this phase of the case.`,
        // duration: "Around 5+ years after filing with USCIS"
      }
    ];
    return(
        <div className="center-container">
            <div>
              <h1> U-Visa Case Timeline</h1>
              <p className="subtitle">How Her Justice U-Visa Cases <span style={{fontWeight: "bold"}}>typically</span> progress</p>
              <p style={{fontWeight: "bold"}}>Please note that U-Certification expiration is 6 months from the date that it is signed. The U-Visa filing must be submitted to the U.S. Citizenship and Immigration Services (USCIS) before that time. </p>
              <TimelineContainer timelineItems={timeline} />
            </div>




            <div className="mainQuizComponent">
              <h1> What is going on with my U-Visa Filing? </h1>
              <p className="subtitle"> Remember that cases are subjected to many factors that can cause delays. </p>
              <button onClick={()=>{navigate('/uvisa-filing/quiz')}}> I am working on filing</button>
              <br/>
              <button onClick={()=>{navigate('/uvisa-postfiling/quiz')}}> I have already filed</button>
            </div>


            <div className="additional-resources">
              <h3> Additional Resources </h3>
              <a href="https://egov.uscis.gov/processing-times/">USCIS Case Processing Times Tool</a> 
            </div>


        </div>
      
    )
};

export default UVisa;

