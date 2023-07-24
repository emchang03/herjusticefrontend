import React from "react";

const DivorceQuestion = ({question, handleChange, userInput}) => {
    return(
        <div className="question-box">
            <h3>{question.q}</h3>

            <div className="test">
                <label>
                    <input 
                        type="radio" 
                        id={question.id}
                        name={question.id} 
                        onChange={handleChange} 
                        checked={userInput === "yes"}
                        value="yes"
                        /> Yes
                </label>

                <label>
                    <input 
                        type="radio" 
                        id={question.id}
                        name={question.id} 
                        onChange={handleChange} 
                        checked={userInput === "no"}
                        value="no"/> No
                </label>
            </div>
        </div>
    )
};

export default DivorceQuestion; 

