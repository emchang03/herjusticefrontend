import React, {useState} from "react";
import DivorceQuestion from "./DivorceQuestion";
import DivorceOutput from "./DivorceOutput";
import { Link, useNavigate } from "react-router-dom";

const QuizContainer = () => {

    const [quizFinished, setQuizFinished] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [curAnswer, setCurAnswer] = useState("blank");
    const [userInput, setUserInput] = useState([]); 
    const navigate = useNavigate();
    

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

    const answers = [
        {
            id: 0,
            a: 'Your attorney might be waiting on forms / waivers to be completed. Reach out to your attorney to ask about your specific status.',
            delays: 'reasons for delay in getting initial docs filed go here'
        },
        {
            id: 1,
            a: 'Your attorney might be waiting for the Defendant to consent to the divorce (Affidavit of Defendant) or is waiting for the default period to elapse (Affidavit of Service) before proceeding. Reach out to your attorney to ask about your specific status.',
            delays: 'reasons for delay in receiving affidavit go here '
        },
        {
            id: 2,
            a: 'If your attorney has not arranged a time to meet and sign final documents, you should reach out to do so now.',
            delays: 'reasons for final docs not being signed go here'
        },
        {
            id: 3,
            a: 'Your attorney has final documents to prepare and has to serve your spouse. There might be a short wait depending on the responsiveness of your spouse.  Reach out to your attorney if you have specific questions.',
            delays: 'reasons for waiting on final filing go here'
        },
        {
            id: 3,
            a: 'If your case has been filed, you can now check ECourts for your specific case updates (Judgment of Divorce, Notice of Entry, etc). Head back to the main divorce page for a direct link to the ECourts page where you can enter your index number.',
            delays: ''
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
        if(userInput.length < questionIndex+1){
            return;
        }
        else if(questionIndex === questions.length-1){
            // mark the quiz as finished and reset the user inputs 
            setQuizFinished(true);
            setUserInput([]);

            // handle their answer 
            if(curAnswer == "yes"){
               setQuestionIndex(answers.length-1); 
            } // else: leave index as is 
        }

        else{ // we aren't done with a question 
            if(curAnswer == "no"){
                setQuizFinished(true);
                // question index doesn't change 

            } else{
                setQuestionIndex((prev)=> prev+1);
            }
            
        }


        // after every route, clear cur answer before moving on? 
    };

    const handlePrev = () => {
        setQuizFinished(false);
        setQuestionIndex((prev)=>prev-1);
    }


    if(!quizFinished){
        return(
            <div className="launch-quiz">
                <h1>Divorce Case Best Estimate</h1>
                <p className="long-desc">Answer these questions to the best of your ability for our best prediction of what might be going on with your case. This is not a definitive answer, just a best estimate.</p>
                <DivorceQuestion 
                        question = {questions[questionIndex]}
                        handleChange = {handleChange}
                        userInput={userInput[questionIndex]}
                />

                {questionIndex != 0 ?  <button onClick={handlePrev}>Previous</button> : <></>}   
                <button onClick={handleNext}>Next</button>
                <br/>
                <Link to='/divorce' className="link">Back to Divorce Page</Link>
            </div>
        );
    }
    else return(
        <div className="launch-quiz">
            <h1>Divorce Case Best Estimate</h1>
            <p className="long-desc">Answer these questions to the best of your ability for our best prediction of what might be going on with your case. This is not a definitive answer, just a best estimate.</p>

            <DivorceOutput
            response = {answers[questionIndex]}
            setQuestionIndex = {setQuestionIndex}
            setQuizFinished = {setQuizFinished}
            setUserInput = {setUserInput}
            />

            <Link to='/divorce'  className="link">Back to Divorce Page</Link>
        </div>
        
    )
    // else {
    //     const sendResponse = answers[questionIndex];
    //     navigate("/divorce/output", {
    //         state: {
    //             response: {sendResponse},
    //             setQuestionIndex: {setQuestionIndex},
    //             setQuizFinished: {setQuizFinished},
    //             setUserInput: {setUserInput}
    //         }
    //     });
    // }




}

export default QuizContainer;
