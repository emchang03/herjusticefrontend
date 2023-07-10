import React from "react";
import { useNavigate } from "react-router-dom";

const UVFOutput = ({response, setQuestionIndex, setQuizFinished, setUserInput}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setQuestionIndex(0);
        setQuizFinished(false);
        setUserInput([]);
        navigate('/uvisa-filing/quiz');
    }
    return(
        <div className="question-box">
            <h3>Our calculations: </h3>
            <p>{response.a}</p>
            <br/>
            <button onClick={handleClick}>Restart Quiz</button>
        </div>

        
    )
};

export default UVFOutput;