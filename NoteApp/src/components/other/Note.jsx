import React from 'react'
import { useState ,useEffect} from 'react';
import './Note.css'
import Popup from './Popup'
// import Noteadd from './Noteadd'
export default function Note() {

  const [showPopup, setShowPopup] = useState(false);

  const [storedData, setStoredData] = useState(null);
  const [selectedX, setSelectedX] = useState({ x: "", y: "" });
  //side bar
  const [allInfoObjects, setAllInfoObjects] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState(null);
//side bar 
  useEffect(() => {
    const storedNotesInfo = JSON.parse(localStorage.getItem("NotesInfo")) || {};

    console.log("Stored Notes Info:", storedNotesInfo); //to checking whter information is retrived or not 
    const infoArray = Object.values(storedNotesInfo);
   setAllInfoObjects(infoArray);
  }, [storedData]);

 // const popupbody = document.querySelector('.noteaddermainbody'); //enable notesadder
  const sideb = document.querySelector('.main'); //disable sidebar notesadder
  
  const handlenotesadder = (info) =>{
    let x = info.infogn.groupName;
    const y = info.infogn.selectedColor;
    console.log(`This is x : ${x}`);

    setSelectedRadio(x);
     
   handleNoteSelection({x,y});
   if (screenWidth < 701) {   
    sideb.style.display = 'none';
  }
  // popupbody.style.display = 'flex';
  }

  
 
  const handleNoteSelection = ({ x, y }) => {
    setSelectedX({ x, y });
  };

  const handleFormSubmit = ({ groupName, selectedColor }) => {
    setStoredData({ groupName, selectedColor });
  };
 
  const handletoggle = () => {
    setShowPopup(!showPopup)
    
  };
  return (
  
    <div className='main' >
    <div class="left">
      <div class="heading"><h2>Pocket Notes</h2></div>
        <div class="group">
        {allInfoObjects.map((info, index) => (
          <div key={index}>
            <div className={`notesInfolist ${selectedRadio === info.infogn.groupName ? 'active' : ''}`} onClick={() => handlenotesadder(info)}>
            <div id="fill"></div>
              <input type="radio" name="sellist1" id="sellist1" checked={selectedRadio === info.infogn.groupName} style={{ display: "none" }}/>
              <div className="initials" style={{backgroundColor:`${info.infogn.selectedColor}`}}> {info.infogn.groupName.slice(0, 2).toUpperCase()}</div>
              <div className="initialsff">{info.infogn.groupName}</div>
            </div>
          </div>
        ))}
       
        <div className='btn'> <button id="bt" onClick={handletoggle}>+</button></div>
        </div>
    </div>
    <div class="right">
    <div className="img">
        <img src="/src/assets/main.png" alt="bad me ana" />
    </div>
    <div className="dis">
        <h2 id='h2'>Pocket Notes</h2>
        <p>Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div> 
     {showPopup && <Popup onFormSubmit={handleFormSubmit}  toggle={handletoggle}/>}
    
    </div>
   </div> 
  
  )
}
