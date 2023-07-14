import React, {useState} from "react";
import UVFOutput from "./UVFOutput";
import { Link, useNavigate } from "react-router-dom";
import UVFQuestion from "./UVFQuestion";

const UVFQuizContainer = () => {

    const [quizFinished, setQuizFinished] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(0);
    const [curAnswer, setCurAnswer] = useState("blank");
    const [userInput, setUserInput] = useState([]); 
    const navigate = useNavigate();
    

    const questions = [
        {
            // INDEX: 0
            q: 'Has your attorney filed the paperwork?',
            id: 0,
        },
        {
            // INDEX: 1
            q: 'Have you or your attorney received receipts of filing?',
            id: 1,
        },
        {
            // INDEX: 2
            q: 'Have you received notice of/fulfilled any biometrics requests?',
            id: 2,
        },
        {
            // INDEX: 3
            q: 'How many meetings have you had with your attorney?',
            id: 3,
        },
    ];

    const answers = [
        {
            // INDEX 0
            id: 0,
            a: 'Within the next 2 months, expect a meeting with your attorney to review receipts'
        },
        {
            // INDEX 1
            id: 1,
            a: 'Expect to hear from the your attorney / the USCIS regarding fulfilling any biometric requirements. '
        },
        {
            // INDEX 2
            id: 2,
            a: 'You can now periodically check the USCIS Processing Times to see the updates in your I-918 processing. Expect your attorney to check in every 3-4 months. You are also eligible to use the quiz for those who have already filed their U-Visa forms.'
        },
        {
            // INDEX 3
            id: 3,
            a: 'Your attorney is likely preparing the documents that need to be filed. Expect to hear from them, and you will likely need another meeting.'
        },
        {
            // INDEX 4
            id: 3,
            a: 'Your attorney is likely still in the process of completing all the necessary forms and evidence. You may need to meet with them again.'
        },
        {
            // INDEX 5
            id: 3,
            a: 'Your attorney is likely finalizing documents. You will probably be asked to come in soon to sign all the forms so that they can be filed with the USCIS.'
        }
    ]
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
        console.log(curAnswer);
        console.log(userInput);
        console.log("userinput length: " + userInput.length);
        console.log("question index: " + questionIndex);

        // this prevents our user from clicking "next" until an answer has been selected  
        if(userInput.length < questionIndex+1){
            return;
        }
        // if(curAnswer === "EC"){
        //     setCurAnswer(userInput[questionIndex+1]);
        //  }
        else if(questions[questionIndex].id === 0){ // final branch for left side 
            if(curAnswer === "yes"){
                setQuestionIndex((prev)=> prev+1);
            } else{
                setQuestionIndex(3);
            }
        }
        else if(questions[questionIndex].id === 1){
            if(curAnswer === "yes"){
                setQuestionIndex((prev)=> prev+1);
            }else{
                setQuizFinished(true);
                setAnswerIndex(0);
            }
        }
        else if(questions[questionIndex].id === 2){
            setQuizFinished(true);
            if(curAnswer === "yes"){
                setAnswerIndex(2)
            } else{
                setAnswerIndex(1)
            }
        }
        else{
            setQuizFinished(true);
            if(curAnswer === "1"){
                setAnswerIndex(3)
            } 
            else if(curAnswer === "2"){
                setAnswerIndex(4)
            }
            else{
                setAnswerIndex(5)
            }
        }
    };

    // const handlePrev = () => {
    //     setQuizFinished(false);
    //     setQuestionIndex((prev)=>prev-1);
    //     setCurAnswer("EC"); // "edge case" has clicked an answer but hasn't clicked "next"
    //     // setAnswerIndex((prev)=>prev-1);
    //     // setCurAnswer("blank");
    // }


    return(
        <div className="launch-quiz">
            <h1>U-Visa Filing Case Best Estimate</h1>
            <p className="long-desc">Answer these questions to the best of your ability for our best prediction of what might be going on with your case. This is not a definitive answer, just a best estimate. <span style={{fontWeight: "bold"}}>Please note that you cannot go back to change your answers. If you make a mistake, restart the quiz.</span></p>
            {!quizFinished ? (
                <div>
                    <UVFQuestion 
                        question = {questions[questionIndex]}
                        handleChange = {handleChange}
                        userInput={userInput[questionIndex]}
                    />
                    {/* {questionIndex != 0 ?  <button onClick={handlePrev}>Previous</button> : <></>} */}
                    <button onClick={handleNext}>Next</button>
                    <br />
                </div>
            ) : (
                <div>
                    <UVFOutput
                    response = {answers[answerIndex]}
                    setQuestionIndex = {setQuestionIndex}
                    setQuizFinished = {setQuizFinished}
                    setUserInput = {setUserInput}
                    />
                </div>
            )}
            <div className="link">
                <Link className="link" to='/uvisa-filing'>Back to U-Visa Page</Link>
            </div>
        </div>
    )
}

export default UVFQuizContainer;
