import React, {useState} from "react";
import ActionItem from "./ActionItem";
import AttorneyStatus from "./AttorneyStatus";
import DivorceResults from "./DivorceResults";
import FormNavBar from "../../Components/FormNavBar";
import { Navigate } from "react-router-dom";

const Divorce  = () => {
    const [pageNum, setPageNum] = useState(0);
    const [actionItemOptions, setActionItemOptions] = useState([
      {
        id: 0,
        text: "Submitted case information to Her Justice."
      },
      {
        id: 1,
        text: "Got into contact with an attorney through Her Justice and scheduled a meeting."
      },
      {
        id: 2,
        text: "Had a meeting with a Her Justice attorney."
      }
    ]);
    const [actionItemDate, setActionItemDate] = useState('');
    const [actionItemId, setActionItemId] = useState(0);
    const [attorneyUpdateOptions, setAttorneyUpdateOptions] = useState([
      {
        id: 0,
        actionItemId: 0, 
        text: "None"
      },
      {
        id: 1,
        actionItemId: 0, 
        text: "In contact, no meeting has been scheduled yet"
      },
      {
        id: 2,
        actionItemId: 0, 
        text: "A call has been scheduled"
      },
      {
        id: 3,
        actionItemId: 1, 
        text: "None"
      },
      {
        id: 4,
        actionItemId: 1, 
        text: "Attorney is reviewing case and preparing"
      },
      {
        id: 5,
        actionItemId: 2, 
        text: "The initial documents have been drafted and/or the ACP application has been completed"
      },
      {
        id: 6,
        actionItemId: 2, 
        text: "The Summons with Notice has been filed, divorce action has commenced."
      },
      {
        id: 7,
        actionItemId: 2, 
        text: "Service of process has been arranged."
      },
      {
        id: 8,
        actionItemId: 2, 
        text: "A properly executed affadavit of defendant has been received."
      },
      {
        id: 9,
        actionItemId: 2, 
        text: "A properly executed affadavit of service has been received."
      },
      {
        id: 10,
        actionItemId: 2, 
        text: "A fee waiver letter has been received and/or final divorce documents have been filed."
      },
      {
        id: 11,
        actionItemId: 2, 
        text: "A copy of Judgement of divorce and Notice of Entry have been filed."
      }
    ]);
    const [attorneyUpdateId, setAttorneyUpdateId] = useState(0); 
    const [attorneyUpdateDate, setAttorneyUpdateDate] = useState('');
    const PAGES = [
      {
        title: "Most Recent Client Action Item",
        description: "Choose the choice that most closely describes the last step you took or item you submitted: ",
        component: (<ActionItem 
          items = {actionItemOptions}
          setDate = {setActionItemDate}
          setId = {setActionItemId}
          /> )
      },
      {
        title: "Most Recent Attorney Update",
        description: "Choose the choice that most closely describes the last update you heard from your attorney regarding their progress on your case.",
        component: ( <AttorneyStatus
          items = {attorneyUpdateOptions}
          prevId = {actionItemId}
          setId={setAttorneyUpdateId}
          setDate={setAttorneyUpdateDate}
          />)
      }, 
      {
        title: "Results: ",
        description: "Your predicted attorney status and next steps.",
        component: (<DivorceResults/>)
      }
    ]
    const RESULTS = [
      {
        title: "Attorney Likely Status",
        description: "The following is the most likely stage that your attorney is working through at the moment: "
      },
      {
        title: "Next Step", 
        description: "The following is the estimated best next step: "
      }
    ]
    const handleSubmit = () => {
      console.log("oh word? on god");
      setPageNum((prev)=> prev+1);
    }

    return(
        <div className="center-container">

            <h1>Your Divorce Timeline: </h1>
            <div>
              <h3> {PAGES[pageNum].title} </h3>
              <h5 className="description">{PAGES[pageNum].description}</h5>
            </div>



            <div>{PAGES[pageNum].component}</div>

           
            <FormNavBar
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                    numPages={PAGES.length}
                    onSubmit={handleSubmit} 
                    // handle submit: calculate, make sure the component gets properly updated, then render the page. the issue is that if i use naviage i need a properly finished results page for the app route
            />

        </div>
      
    )
};
// if last page, change from next to submit, on submit calculate results 
export default Divorce;

// next step: 
// 