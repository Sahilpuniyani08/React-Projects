import React ,{useState ,useEffect} from 'react'
import { useNote } from '../../Contexts/NoteContext';

export const GroupcContent = ({id, name="unknown" , color="Red", bg="white"}) => {
  const {selectedGroup,setGroup} = useNote();
  let upperCharacter = "";
  let  maxLen = 0;
  const checkUpperCase = () =>{
    for (let i = 0; i < name.length; i++) {
      if(maxLen <2) {
        if(name[i]==" ") continue; 
        if(name[i].toUpperCase() === name[i]){
          upperCharacter = upperCharacter+name[i];
          maxLen++;
        }
      };
     
  }
  if(upperCharacter === ""){
    upperCharacter += name[0].toUpperCase();
  }
  }
  checkUpperCase();
 
  
  return (
<div 
onClick={ () =>{
  setGroup(id)
} }
className = {`flex gap-3 pl-6 mb-3 py-2 cursor-pointer `} style={{backgroundColor: selectedGroup === id ? "#2f2f2f2b" : bg ,borderRadius: selectedGroup === id ? "16px" : "0"}} >

<div className={`justify-center  h-12 w-12 flex items-center text-white text-md font-semibold rounded-full shadow-sm`} style={{backgroundColor:color}}>{upperCharacter}</div>
<div className={`font-semibold lg:text-xl md:text-xl sm:lg text-black  flex items-center`} >{name}</div>
</div>
  )
}
