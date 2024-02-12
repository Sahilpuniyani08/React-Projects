import {createContext ,useContext } from 'react'
export const noteContext = createContext({
    groupNotes:[],
    addGroup : () =>{},
    addNote : () =>{},
    selectedGroup:"",
    setGroup : () =>{},
});

export const NoteProvider = noteContext.Provider;

export const useNote = () =>{
    return useContext(noteContext);
}