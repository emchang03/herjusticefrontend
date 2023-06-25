import React, {useState} from "react";


const AttorneyStatus = ({items, prevId, setId, setDate}) => {

    console.log("id from actionItem " + prevId);
   

    const handleDate = (e) =>{
        setDate(e.target.value);
    }

    const handleId = (e) =>{
        console.log(e.target.prevId);
        setId(e.target.prevId)
    }

    return(
    <div>
        <form>
        {items.map((item)=> {
            if(item.actionItemId == prevId){
            return(
            <div>
                <input type="radio" id={item.prevId} name="attorney" onClick={handleId}/>
                <span>{item.text}</span>
            </div>
            )
            }
            
        })}
            <input type="date" onClick={handleDate}/>
        </form>
    </div>         
    )
}

export default AttorneyStatus; 