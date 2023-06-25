import React from "react";
import right from "../assets/right-arrow.png";
import left from "../assets/left-arrow.png";
import { useNavigate } from "react-router-dom";

const FormNavButton = ({ onClick, text }) => {
    return(
        <div className="form-nav-button-container" onClick={onClick}>
            <span className="arrow-container">
                <img className="arrow" src={text} />
            </span>
        </div>
    )
}

const FormNavBar = ({pageNum, setPageNum, numPages, onSubmit}) => {
    const isFirstPage = pageNum === 0; //boolean 
    const isLastPage = pageNum === numPages-1;
    const navigate = useNavigate();
    const prevPage = () => {
        setPageNum((prev)=> prev -1);
    }
    const nextPage = () => {
        setPageNum((prev)=> prev+1);
    }

    return(
        <div>
            {!isFirstPage && (<FormNavButton onClick={prevPage} text={left}/>)}
            {isLastPage ? ( <button onClick={onSubmit}>Submit</button>) : 
            <div>
            <button onClick={()=>navigate("/home")}> cancel</button>
            <FormNavButton onClick={nextPage} text={right} />
            </div>
            
            }
            
        </div>
    )

}

export default FormNavBar; 