import React, {useState} from "react";
import UVPQuestion from "./UVPQuestion";
import UVPOutput from "./UVPOutput";
import { Link } from "react-router-dom";

const UVPQuizContainer = () =>{
    const [quizFinished, setQuizFinished] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(0);
    const [curAnswer, setCurAnswer] = useState("blank");
    const [userInput, setUserInput] = useState([]); 


    const questions = [
        {
            q: "Did you or your attorney receive a notice of a Bona Fide Determination?",
            id: 0
        },
        {
            q: "Did you or your attorney receive a Request for Further Evidence?",
            id: 1
        }
    ];

    const answers=[
        {
            a: `This is a preliminary decision, not a final decision, on your case. It means that USCIS believes you are eligible for U-Nonimmigrant status, but they can still ask you for further information. It is not known how much longer you will have to wait for a final decision. It could be 1-3 years. You should check in with your attorney every 6 months. Expect an Employment Authorization Document (or work permit), valid for 4 years. You are now in deferred action status for the next 4 years. Please reach out to your attorney with any questions.`,
            id: 0
        },
        {
            a: "Check in with your attornet to make sure your response is submitted by the set deadline. There is the potential to receive a Notice of Intent to Deny if you do not comply with the Request for Evidence. See your attorney with what to do in such a situation.",
            id: 1
        },
        {
            a: "It currently takes over five years from the date of filing your U-Visa petition to get any decision on your case. You can check in with your attorney every 3-4 months for updates.",
            id: 2
        },
        {
            a: "There may be something happening with your application that your attorney needs to act on. If it has been over 5 years since you filed your petition, you should reach out to your attorney.",
            id: 3
        }
    ];


    const handleChange = (e) => {
        const {value} = e.target; 
        setUserInput((prevUserInput)=>{
            const newUserInput = [...prevUserInput];
            newUserInput[questionIndex] = value; 
            return newUserInput; 
        })
        setCurAnswer(e.target.value);    
    }

    const handleNext = () => {
        if(userInput.length < questionIndex+1){
            return;
        }
        else if(questions[questionIndex].id === 0){
            if(curAnswer === "yes"){
                setQuizFinished(true);
                setAnswerIndex(0);
            }
            else if(curAnswer === "no"){
                setQuestionIndex((prev)=> prev+1);
            } 
            else{ // "No updates/Unsure"
                setQuizFinished(true);
                setAnswerIndex(2);
            }
        }
        else{ // question id = 1
            setQuizFinished(true);
            if(curAnswer === "yes"){
                setAnswerIndex(1);
            } 
            else if(curAnswer === "less"){ // less than 5 years 
                setAnswerIndex(2);
            } 
            else{ // 5+ years 
                setAnswerIndex(3);
            }
        }
    }

    const handlePrev = () => {
        setQuizFinished(false);
        setQuestionIndex((prev)=>prev-1);
    }

    if(!quizFinished){
        return(
            <div className="launch-quiz">
                <h1>U-Visa Post Filing Case Best Estimate</h1>
                <p className="long-desc">Answer these questions to the best of your ability for our best prediction of what might be going on with your case. This is not a definitive answer, just a best estimate.</p>

                <UVPQuestion 
                    question={questions[questionIndex]}
                    handleChange={handleChange}
                    userInput={userInput[questionIndex]}
                />

                {questionIndex != 0 ?  <button onClick={handlePrev}>Previous</button> : <></>}
                <button onClick={handleNext}>Next</button>
                <br />
                <Link className="link" to='/uvisa-postfiling'>Back to U-Visa Post Filing Page</Link>
            </div>
        )
    }
    else{
        return(
            <div className="launch-quiz">
                <h1>U-Visa Post Filing Case Best Estimate</h1>
                <p className="long-desc">Answer these questions to the best of your ability for our best prediction of what might be going on with your case. This is not a definitive answer, just a best estimate.</p>
                <UVPOutput
                response = {answers[answerIndex]}
                setQuestionIndex = {setQuestionIndex}
                setQuizFinished = {setQuizFinished}
                setUserInput = {setUserInput}
                />
                <Link className="link" to='/uvisa-postfiling'>Back to U-Visa Post Filing Page</Link>
            </div>
        )
    }



};


export default UVPQuizContainer;