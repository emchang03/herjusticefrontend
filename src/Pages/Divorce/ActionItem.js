import React, {useState} from "react";


const ActionItem = ({items, setDate, setId}) => {    

    const handleDate = (e) =>{
        setDate(e.target.value);
    }

    const handleId = (e) =>{
        console.log(e.target.id);
        setId(e.target.id)
    }

    return(
    <div>
        <form>
        {items.map((item)=> {
            return(
            <div>
                <input type="radio" id={item.id} name="action" onClick={handleId}/>
                <span>{item.text}</span>
            </div>
            )
            
            
        })}
            <input type="date" onChange={handleDate}/>
        </form>
    </div>         
    )
};


export default ActionItem; 