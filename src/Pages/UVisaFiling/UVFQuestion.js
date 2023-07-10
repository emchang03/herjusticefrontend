import React from "react";

const UVFQuestion = ({question, handleChange, userInput}) => {

    if(question.id !== 3){
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
    }
    else{
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
                            checked={userInput === "1"}
                            value="1"
                        /> 1
                    </label>
        
                    <label>
                        <input 
                            type="radio" 
                            id={question.id}
                            name={question.id} 
                            onChange={handleChange} 
                            checked={userInput === "2"}
                            value="2"                           
                        /> 2
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            id={question.id}
                            name={question.id} 
                            onChange={handleChange} 
                            checked={userInput === "3"}
                            value="3"                           
                        /> 3
                    </label>
                </div>
            </div>
        )
    }
};

export default UVFQuestion; 
