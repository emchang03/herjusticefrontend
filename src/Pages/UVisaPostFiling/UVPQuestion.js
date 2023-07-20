import React from "react";

const UVPQuestion = ({question, handleChange, userInput}) => {
    if(question.id === 0){
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
                            value="no"
                        /> No
                    </label>      

                    <label>
                        <input 
                            type="radio" 
                            id={question.id}
                            name={question.id} 
                            onChange={handleChange} 
                            checked={userInput === "unsure"}
                            value="unsure"
                        /> No Updates / Unsure
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
                        checked={userInput === "less"}
                        value="less"
                    /> No, but it has been less than 5 years since I filed
                </label>      

                <label>
                    <input 
                        type="radio" 
                        id={question.id}
                        name={question.id} 
                        onChange={handleChange} 
                        checked={userInput === "more"}
                        value="more"
                    /> No, and it has been 5+ years since I filed
                </label>                          
            </div>
        </div>
        )
    }
};


export default UVPQuestion; 