import React, { useState } from "react";
import "./pop.css";
function Popup({ onFormSubmit,toggle }) {
  const [groupName, setGroupName] = useState("");   //title
  const [selectedColor, setSelectedColor] = useState("");  //color
  const [noteinfo ,setNoteInfo] = useState(" ")
  const [notesinfo, setNotesInfo] = useState([]);
  const [card, setCard] = useState(false);
  const handleFormSubmit = (e) => {
       e.preventDefault();
   
      const newNoteInfo = { groupName , selectedColor };
      // Save the note in local storage
      const storedNotesInfo = JSON.parse(localStorage.getItem("NotesInfo")) || {};    //fetch the array of notes in storedNotes
      storedNotesInfo[groupName] = {infogn:newNoteInfo};
      //storedNotesInfo.push(newNoteInfo);                                              //push the new element in storenotes [1,2,3, .. ..]
      localStorage.setItem("NotesInfo", JSON.stringify(storedNotesInfo));             //store the array back to the localstorage

      setNotesInfo([...notesinfo, newNoteInfo]);
      setNoteInfo("");


      onFormSubmit({ groupName, selectedColor }); // Call the parent component's callback function to store the values
      cancel(); // Close the popup after submission
    }
    
  



 
  const cancel = () => {
    toggle();
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={`body ${card ? "active-modal" : ""}`} onClick={cancel}>
      <div className="card" onClick={stopPropagation}>
        <div className="secondcard">
          <div className="color" id="poph">
            Create New Notes group
          </div>

          <div className="color">
            Group Name
            <input
              type="text"
              name="myCheckbox"
              placeholder="Enter your group name..."
              value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
          </div>
          <div className="color">
            Choose colour
            <input
              type="radio"
              name="myCheckbox"
              style={{ backgroundColor: "var(--c1)" }}
              onChange={() => setSelectedColor("var(--c1)")}
            />
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
          <button id="pop-btn" onClick={handleFormSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
