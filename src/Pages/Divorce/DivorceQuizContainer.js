import React, {useState} from "react";
import DivorceQuestion from "./DivorceQuestion";
import DivorceOutput from "./DivorceOutput";
import { Link, useNavigate } from "react-router-dom";

const QuizContainer = () => {

    const [quizFinished, setQuizFinished] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(0); 
    const [curAnswer, setCurAnswer] = useState("blank");
    const [userInput, setUserInput] = useState([]); 
    const navigate = useNavigate();
    


    // EDIT HERE: 
    const questions = [
        {
            q: 'Has your attorney filed the initial divorce documents?',
            id: 0,
        },
        {
            q: 'Has your attorney received an Affidavit of Defendant or a notarized Affidavit of Service from your server?',
            id: 1,
        },
        {
            q: 'Have you met with your attorney to sign final divorce documents?',
            id: 2,
        },
        {
            q: 'Has your attorney filed final divorce documents?',
            id: 3,
        },
    ];


    // EDIT HERE: 
    const answers = [
        {
            id: 0,
            a: 'Your attorney might be waiting on forms / waivers to be completed. Reach out to your attorney to ask about your specific status.',
            delays: [`Attorney is waiting for client information to complete form`, `Attorney is waiting for client to review form`, `Attorney waiting for client signature and/or notary signing`]
        },
        {
            id: 1,
            a: 'Your attorney might be waiting for the Defendant to consent to the divorce (Affidavit of Defendant) or is waiting for the default period to elapse (Affidavit of Service) before proceeding. Reach out to your attorney to ask about your specific status.',
            delays: [`Service on Defendant has not been effectuated`, `Default period is a total of 41 days from date of service`, `Defendant has contacted attorney but has not yet signed the Affidavit of Defendant`]
        },
        {
            id: 2,
            a: 'If your attorney has not arranged a time to meet and sign final documents, you should reach out to do so now.',
            delays: [`Attorney has not yet drafted the final documents`, `Attorney is waiting for information from client to complete final documents`]
        },
        {
            id: 3,
            a: 'Your attorney is likely still working on preparing, drafting, and reviewing your final paperwork.',
            delays: [`Limited attorney capacity`]
        },
        {
            id: 3,
            a: 'If your case has been filed, you can now check ECourts for your specific case updates (Judgment of Divorce, Notice of Entry, etc). Head back to the main divorce page for a direct link to the ECourts page where you can enter your index number.',
            delays: null
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
        console.log("cur answer: " + curAnswer);
        console.log(userInput);
        console.log("userinput length: " + userInput.length);
        console.log("question index: " + questionIndex);


       
        // prevents us from moving forward without inputting an answer 
        if(userInput.length < questionIndex+1){
            return;
        }

        // if we went from prev --> forward and NO cur answer
        // if(questionIndex !== userInput.length-1){
        //     setQuestionIndex(userInput.length-1);
        // }

        // if(curAnswer === "EC"){
        //    setCurAnswer(userInput[questionIndex+1]);
        // }


        // on our last question 
        if(questionIndex === questions.length-1){
            // mark the quiz as finished and reset the user inputs 
            setQuizFinished(true);
            setUserInput([]);

            // handle their answer 
            if(curAnswer == "yes"){
               setAnswerIndex(answers.length-1); // last answer option
            } 
            else{
                setAnswerIndex(questionIndex); // second to last answer option 
            }
        }

        else{ // we aren't done with the questions 
            if(curAnswer == "no"){
                setQuizFinished(true);
                setAnswerIndex(questionIndex);
                // question index doesn't change 

            } else{
                // move onto the next question
                setQuestionIndex((prev)=> prev+1);
            }
            
        }
    };

    // const handlePrev = () => {
   
    //     setQuizFinished(false);
    //     setQuestionIndex((prev)=>prev-1);
    //     setCurAnswer("EC"); // "edge case" has clicked an answer but hasn't clicked "next"
    //     console.log("cur answer: " + curAnswer);
    //     console.log(userInput);
    //     console.log("userinput length: " + userInput.length);
    //     console.log("question index: " + questionIndex);
    
    // }

    return(
        <div className="launch-quiz center-container">
        <h1>What might be happening with my Uncontested Divorce case?</h1>
        <p className="long-desc">Answer these questions to the best of your ability. This is not a definitive answer, just a best estimate. <span style={{fontWeight: "bold"}}>Please note that you cannot go back to change your answers. If you make a mistake, refresh the page to restart the quiz.</span> If you do not know the answer, please talk to your attorney. </p>

        
        {!quizFinished ? (
            <div>
                <DivorceQuestion 
                            question = {questions[questionIndex]}
                            handleChange = {handleChange}
                            userInput={userInput[questionIndex]}
                />

                {/* {questionIndex != 0 ?  <button onClick={handlePrev}>Previous</button> : <></>}    */}
                <button onClick={handleNext}>Next</button>
                <br/>
            </div>
        ) : (
            <div>
                <DivorceOutput
                response = {answers[answerIndex]}
                setQuestionIndex = {setQuestionIndex}
                setQuizFinished = {setQuizFinished}
                setUserInput = {setUserInput}
                />
            </div>
        )}
        <div className="link">
        <Link to='/divorce' >Back to Uncontested Divorce Page</Link>
        </div>
        </div>
    )
}

export default QuizContainer;
