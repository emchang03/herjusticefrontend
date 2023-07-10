import React from "react";
// import QuizContainer from "./QuizContainer";
// import infographic from "/src/assets/divorce.png";
import {useNavigate } from "react-router-dom";
const Divorce  = () => {
  const navigate = useNavigate();
    return(
        <div className="center-container">
            <div>
              <h1> Divorce Timeline</h1>
              <p className="subtitle">How Her Justice Divorce Cases <span style={{fontWeight: "bold"}}>typically</span> progress</p>
              <p> static timeline component goes here</p>
             {/* <img src={infographic}/> */}
            </div>

            <div>
              <h1> Additional Resources </h1>
              <a href="https://iapps.courts.state.ny.us/webcivil/">New York ECourts - Uncontested Divorce Index Number Input</a> 
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

