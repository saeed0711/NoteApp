import React ,{useState} from "react";
import "./pop.css";
function Popup({toggle}) {
    const [card , setCard] = useState(false); 
    const cancel=()=>{
        toggle()
    }
    const stopPropagation=(event)=>{
        event.stopPropagation()
    }
  return (
      <div className={`body ${card ? 'active-modal' : ''}`} onClick={cancel}>
           <div className="card" onClick={stopPropagation} >
              <div className="secondcard">
                <div className="color" id="poph">
                Create New Notes group
                </div>

               <div className="color">
               Group Name
                 <input type="text" name="myCheckbox" placeholder="Enter your group name..."/>
                 </div>
          <div className="color">
            Choose colour
            <input type="radio"  name="myCheckbox"  style={{ backgroundColor: "var(--c1)" }}
               onChange={() => setSelectedColor("var(--c1)")}/>
            
            <input
              type="radio"
              name="myCheckbox"
              style={{ backgroundColor: "var(--c2)" }}
              onChange={() => setSelectedColor("var(--c2)")}
            />
            <input
              type="radio"
              name="myCheckbox"
              style={{ backgroundColor: "var(--c3)" }}
              onChange={() => setSelectedColor("var(--c3)")}
            />
            <input
              type="radio"
              name="myCheckbox"
              style={{ backgroundColor: "var(--c4)" }}
              onChange={() => setSelectedColor("var(--c4)")}
            />
            <input
              type="radio"
              name="myCheckbox"
              style={{ backgroundColor: "var(--c5)" }}
              onChange={() => setSelectedColor("var(--c5)")}
            />
            <input
              type="radio"
              name="myCheckbox"
              style={{ backgroundColor: "var(--c6)" }}
              onChange={() => setSelectedColor("var(--c6)")}
            />
            </div>
          </div>
          <div className="secondcard" id="btnpopup">
            <button id="pop-btn">Create</button>
          </div>
        
      </div>
    </div>
  );
}// popupcardsub00 == secondcard
//  popupcardsub == color
//  popupbody ==  body
//  popupcard  == card
//

export default Popup;
