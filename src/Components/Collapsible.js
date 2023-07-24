import React, {useState} from "react";

const Collapsible = (props) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <div className="toggle-click">
                {props.label}
                <i className="arrow-down" onClick={toggle}></i>
            </div>
           
            {open && (
                <div className="toggle-expand">
                {props.children}
                </div>
            )}
        </div>
    )
}

export default Collapsible; 