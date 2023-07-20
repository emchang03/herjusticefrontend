import React from "react";
import { NavLink } from "react-router-dom";
import Collapsible from "../Components/Collapsible";

const Home  = () => {
    const FAQS = [
        {
            q: "What is the relationship between Her Justice, my attorney, and me?",
            a: "answer here"
        },
        {
            q: "What is the process like for getting a case handled with Her Justice?",
            a: "answer here"
        },
        {
            q: "Who should I talk to if I have a question about my case?",
            a: "answer here"
        },
        {
            q: "Why is my case taking so long?",
            a: "answer here"
        },
        {
            q: "What happens if my attorney changes?",
            a: "answer here"
        },
        {
            q: "Is there anything I can do to speed up the process?",
            a: "answer here"
        },
        {
            q: "How should I keep track of all the forms my attorney is working on?",
            a: "answer here"
        },
        {
            q: "What if my attorney stops responding to me?",
            a: "answer here"
        },
        {
            q: "Where should I go for more resources?",
            a: "answer here"
        }
    ];


    return(
        <div className="center-container">
            <div>
                <h1> Welcome to the Client Case Navigator Tool </h1>
                <p className="long-desc"> This Her Justice tool is meant to promote transparency during your case processing. Click on your specific case type and answer a few simple questions to get our best estimate of where your case is in the processing timeline. <span style={{fontWeight: "bold"}}>This tool is meant for informational purposes only. Clicking on and exploring this page will not impact or speed up your case in any way.</span> At this time, the tool only has the case type of Uncontested Divorce and U Nonimmigrant Status ("U-Visas").</p>

                <p className="long-desc" style={{fontSize:"smaller"}}>
                Disclaimer: This tool is not provided by any governmental agency. It is provided by Her Justice, a non-profit organization, and it is only meant for clients receiving services from Her Justice.
                </p>
            </div>
                


                <div className="flex">
                    <div className="home-button">
                        <NavLink className="nav-link" to='/divorce'> Uncontested Divorce</NavLink>
                    </div>
                    <div className="home-button" > 
                        <NavLink className="nav-link" to='/uvisa-filing'> U-Visas</NavLink>
                    </div>
                    {/* <div className="home-button"> 
                        <NavLink className="nav-link" to='/uvisa-postfiling'> U-Visa Post Filing</NavLink>
                    </div> */}
                </div>



                <div className="faq-box">
                    <h1>Frequently Asked Questions</h1>
                    <p className="long-desc">Build context and background knowledge around case processing through Her Justice.</p>
                    {
                       FAQS.map((obj)=>{
                        return(
                            <div className="faq">
                                <Collapsible label={obj.q}>
                                    {obj.a}
                                </Collapsible>
                            </div>
                        )
                       })
                    }
                </div>




        </div>
    
    )
};

export default Home;

