import React from "react";
// import QuizContainer from "./QuizContainer";
import {useNavigate } from "react-router-dom";
import TimelineContainer from "../../Components/TimelineContainer";
const Divorce  = () => {

  const timeline = [
    {
      number: 1,
      title: "Initial Client Meeting",
      desc: "Client and attorney meet to fill out initial paperwork and questionnaires",
      duration: "1 day"
    },
    {
      number: 2,
      title: "Attorney Prep",
      desc: "Attorney fills out and reviews initial paperwork and prepares to serve the spouse",
      duration: "Around 4 weeks"
    },
    {
      number: 3,
      title: "Service of Process",
      desc: "You and your attorney will prepare to serve your spouse.",
      duration: "From 1 week to 120 days"
    },
    {
      number: 4,
      title: "Await Spouse Response",
      desc: "You and your attorney will await for your spouse to respond OR for the 40 day period to elapse before the case defaults",
      duration: "Around 40 days"
    },
    {
      number: 5,
      title: "Prepare Final Documents",
      desc: "Your attorney will prepare final papers for you to sign.",
      duration: "Around 1-2 months"
    },
    {
      number: 6,
      title: "Court Processing",
      desc: "After filing your final papers, the court will process the final papers until your attorney receives a Judgement of Divorce.",
      duration: "Around 1 year"
    },
    {
      number: 6,
      title: "Receive court approval",
      desc: "After receiving notice, your attorney will collect Notice of Entry and a Judgement of Divorce before sending them over to you along with your concluding letters",
      duration: "Around 1 week"
    }
  ]
  const navigate = useNavigate();
    return(
        <div className="center-container">
            <div>
              <h1> Divorce Timeline</h1>
              <p className="subtitle">How Her Justice Divorce Cases <span style={{fontWeight: "bold"}}>typically</span> progress</p>
              <TimelineContainer
                timelineItems={timeline} />
            </div>

            <div>
              <h1> Additional Resources </h1>
              <a href="https://iapps.courts.state.ny.us/webcivil/">New York ECourts - Uncontested Divorce Index Number Input</a> 
              <br/>
              <a href="https://herjustice.org/wp-content/uploads/2020/07/Divorce-2020.pdf">Her Justice Divorce Legal Guide</a> 
            </div>


            <div className="mainQuizComponent">
              <h1> What is going on with my divorce case? </h1>
              <p className="subtitle"> Answer a few simple questions to see our best estimate. Remember that cases are subjected to many factors that can cause delays. </p>
              <button onClick={()=>{navigate('/divorce/quiz')}}>Launch Quiz</button>
            </div>


        </div>
      
    )
};
// if last page, change from next to submit, on submit calculate results 
export default Divorce;

