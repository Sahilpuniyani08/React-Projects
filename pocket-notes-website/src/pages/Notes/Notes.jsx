import React ,{useEffect,useState}from 'react'
import { GroupcContent } from '../../components/GroupcContent/GroupcContent'
import NoteContent from '../../components/NoteContent/NoteContent'
import { useNote } from '../../Contexts/NoteContext';
import EmptyNotePage from '../../components/EmptyPages/EmptyNotePage';
import { IoMdArrowRoundBack } from "react-icons/io";

import "./Notes.css"

export const Notes = () => {
  const [selectedNoteGrp, setSelectedNoteGrp] = useState({})
  const [noteContent, setNoteContent] = useState("")
  const {selectedGroup,groupNotes,addNote ,setGroup} = useNote();


  useEffect(() => {
    const grpNote = groupNotes.filter(item => item.id === selectedGroup);
    setSelectedNoteGrp(grpNote[0]);
  }, [selectedGroup,addNote])
  
  
  const addNoteContent =()=>{
   addNote(noteContent,selectedNoteGrp.id);
   setNoteContent("");
  }

  
  let upperCharacter = "";
  let  maxLen = 0;
  const checkUpperCase = () =>{
    for (let i = 0; i < selectedNoteGrp.name.length; i++) {
      if(maxLen <2) {
        if(selectedNoteGrp.name[i]==" ") continue; 
        if(selectedNoteGrp.name[i].toUpperCase() === selectedNoteGrp.name[i]){
          upperCharacter = upperCharacter+selectedNoteGrp.name[i];
          maxLen++;
        }
      };
     
  }
  if(upperCharacter === ""){
    upperCharacter += selectedNoteGrp.name[0].toUpperCase();
  }
  }

 selectedNoteGrp.name && checkUpperCase();
  
  return (
    <div className={`w-full h-screen overflow-y-hidden overflow-x-hidden relative pb-40  ${selectedGroup ? "sideBarBlock" :"sideBarhidden"} `}>
    <div 
 className = {`flex gap-3 pl-6 mb-3 py-2 cursor-pointer` }  style={{backgroundColor:"#001f8b"}} >
 <div className= ' w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#c8d2f6] lg:hidden md:hidden sm:block  ' onClick={() =>setGroup("")}>
       <IoMdArrowRoundBack  color='#fff' size={25}/>  
</div>
<div className={`justify-center h-12 w-12 flex items-center text-white text-xl font-semibold  rounded-full shadow-sm`} style={{backgroundColor:selectedNoteGrp.color}}>{upperCharacter}</div>
<div className={`font-semibold lg:text-xl md:text-xl sm:lg text-white  flex items-center `} >{selectedNoteGrp.name}</div>
</div>
    {/* <GroupcContent bg={"#001f8b"} from='notes' color={selectedNoteGrp.color} id={selectedNoteGrp.id} name={selectedNoteGrp.name}  /> */}
    <div className='w-full h-full overflow-y-scroll  pb-20'>
    {
      selectedNoteGrp.notes && selectedNoteGrp.notes.map((item,index)=>{

        return  <NoteContent key={index} {...item}  />
      })
    }
    {
      selectedNoteGrp.notes && selectedNoteGrp.notes.length === 0 && <EmptyNotePage heading={"POCKET NOTES"} text={"Please add notes to make your work consistent"}/> 
    }
     </div>
     <div className=' w-full p-5 rounded-b-md  absolute bottom-0 bg-[#001f8b]  '>
    <textarea  id="message" rows="4" value={noteContent} onChange={(e) =>setNoteContent(e.target.value)} className="block p-2.5 w-full text-lg above text-gray-900 bg-white rounded-lg border resize-none border-gray-300 focus:ring-blue-500 focus:border-blue-500"  placeholder="Here’s the sample text for sample work....">
    </textarea>
    <button
     disabled={noteContent ===""? true:false}
      type="submit"
       onClick={()=> addNoteContent()} 
       style={{color:noteContent !== ""? "#001f8b" : "#acb9eb"}}
        className={`inline-flex justify-center p-2 rounded-full above cursor-pointer absolute right-8 bottom-10`}>
            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
        </button>
      </div>
    </div>
  )
}
