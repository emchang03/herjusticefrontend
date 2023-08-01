import React from "react";
import Collapsible from "../Components/Collapsible";

 // EDIT HERE: 
 const FAQS = [
    {
        q: `What is the relationship between Her Justice, my attorney, and me?`,
        a: `Her Justice partners with many law firms in New York City who want to assist with cases on a pro bono basis. Clients come to Her Justice for case assessment and waitlist placement before being matched with a pro bono attorney at a partner firm. Once the client signs the firm retainer, the client becomes the firm’s client, and the firm is responsible for the case. Pro bono attorneys work on behalf of the client; we ask that clients try their best to work with the firm. Her Justice provides mentoring support to pro bono attorneys throughout the duration of the case through regular communication, monitoring, and providing advice as needed. All communication between members of your legal team and Her Justice are confidential.`
    },
    {
        q: `What is the process like for getting a case handled with Her Justice?`,
        a: `Her Justice utilizes various criteria to determine who we can assist: income, gender, and type of legal matter. We assess the case, collect documents, and then place the client on a waitlist until we can find an attorney for the client.`
    },
    {
        q: `Who should I talk to if I have a question about my case?`,
        a: `Prior to pro bono placement, the assessing attorney is the main contact. After the case is placed with a pro bono attorney, that attorney and the firm become responsible; they should be contacted should any questions arise.`
    },
    {
        q: `Why is my case taking so long?`,
        a: `Delays for cases can be caused by a multitude of factors, as cases are dependent not only on the firm, but also the courts system itself. Delays are typically caused by overburdened courts/federal agencies and case backlogs.`
    },
    {
        q: `What happens if my attorney changes?`,
        a: `If your attorney changes, the client is still a client of the firm. The firm will assign another attorney to the case and should notify the client and Her Justice of any staffing changes.`
    },
    {
        q: `Is there anything I can do to speed up the process?`,
        a: `More often than not, the best a client can do is to come to meetings prepared, meet deadlines, and work with their pro bono attorneys. There is no real way to avoid the long waiting times for most cases.`
    },
    {
        q: `What if my attorney stops responding to me?`,
        a: `If a client is unable to contact their attorney, we advise them to contact Her Justice immediately. The Placement Letter instructs clients to contact the Pro Bono Coordinator.`
    },
    {
        q: `Where should I go for more resources?`,
        a: `The firm handles the legal issues, but clients can reach out to our social worker if they have any non-legal issues such as needing counseling, applying for benefits, etc.`
    }
];


const FaqPage = () => {
    return (
    <div className="center-container">
        <div className="faq-box" id="faq">
            <h1>Frequently Asked Questions</h1>
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
}


export default FaqPage; 