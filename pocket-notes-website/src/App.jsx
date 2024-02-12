import { useState, useSelector, useEffect } from "react";
import "./App.css";
import { Sidebar } from "./pages/SideBar/Sidebar";
import { Notes } from "./pages/Notes/Notes";
import { NoteProvider } from "./Contexts/NoteContext";
import EmptyNotePage from "./components/EmptyPages/EmptyNotePage";

function App() {
  const [groupNotes, setGroupNotes] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");

  const addGroup = (grp) => {
    if (!groupNotes) {
      setGroupNotes([grp]);
    } else {
      setGroupNotes((prevNotes) => [grp, ...prevNotes]);
    }
  };

  const addNote = (note, id) => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes + " " + ampm;
    let date = `${day}/${month}/${year}`;

    const newNote = {
      note: note,
      date: date,
      time: time,
    };

    //  const findedNode = groupNotes.find((prevGrp) => (prevGrp.id === id ));
    //   if(findedNode.notes.length ===0){
    //     findedNode.notes = [newNote];
    //   } else{
    //     findedNode.notes = [newNote ,...findedNode.notes];
    //   }
    //   console.log(findedNode)

    setGroupNotes((prev) =>
      prev.map((prevGrp) =>
        prevGrp.id === id
          ? { ...prevGrp, notes: [...prevGrp.notes, newNote] }
          : { ...prevGrp }
      )
    );
  };

  const setGroup = (id) => {
    setSelectedGroup(id);
  };

  useEffect(() => {
    const grpNotes = JSON.parse(localStorage.getItem("groupNotes"));
    if (grpNotes && grpNotes.length > 0) {
      setGroupNotes(grpNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groupNotes", JSON.stringify(groupNotes));
  }, [groupNotes]);

  return (
    <NoteProvider
      value={{ groupNotes, addGroup, addNote, selectedGroup, setGroup }}
    >
      <div className="flex h-screen w-full">

          <Sidebar groupNotes={groupNotes} />
    
        {selectedGroup && <Notes />}
        <div className="hide">
          {selectedGroup == "" && (
            <EmptyNotePage
              heading={"POCKET NOTES"}
              text={
                "Send and receive messages without keeping your phone online.Use Pocket Notes on up to 4 linked devices and 1 mobile phone"
              }
              bottom={"🔒 end-to-end encrypted"}
            />
          )}
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
