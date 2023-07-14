import React from "react";
import { useNavigate } from "react-router-dom";

const DivorceOutput = ({response, setQuestionIndex, setQuizFinished, setUserInput}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setQuestionIndex(0);
        setQuizFinished(false);
        setUserInput([]);
        navigate('/divorce/quiz');
    }
    return(
        <div className="question-box">
            <div>
                <h3>Our calculations: </h3>
                <p>{response.a}</p>
            </div>

            {response.delays!== null && (
            <div>
                <h3>Potential reasons for delay: </h3>
                {response.delays.map((delay)=>{
                    return(
                        <p>{delay}</p>
                    )
                })}
            </div>
            )}
            
            
            <button onClick={handleClick}>Restart Quiz</button>
        </div>

        
    )
};

export default DivorceOutput;