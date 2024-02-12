import React,{useState} from 'react'
import { GroupcContent } from '../../components/GroupcContent/GroupcContent'
import { useNote } from '../../Contexts/NoteContext';
import "./SideBar.css"
export const Sidebar = ({groupNotes}) => {
  const {selectedGroup ,addGroup,setGroup} = useNote();
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("");
  const colorArray =["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"];

console.log(selectedGroup ? "sahil":"madhav"); 
  const addNewGroup = () =>{
   const newGrp = {
    id: Date.now(),
    name:groupName,
    color:color,
    notes:[]
   }
   addGroup(newGrp)
   setGroupName("");
   setColor("");
   setShowModal(false);
  }

  return (
    <div className={`bg-white h-screen w-full shrink-0 sm:w-1/5 text-center  shadow-md text-wrap  overflow-hidden relative ${selectedGroup ? "sideBarhidden ":"sideBarBlock "}`}>
     <h1 className=' font-semibold text-2xl mt-5  sticky' onClick={() =>setGroup("")}>Pocket Notes</h1>
      <button onClick={() => setShowModal(!showModal)} className='h-16 w-16  bg-[#001f8b] rounded-full shadow-lg absolute hover:bg-[#6b7bb4] bottom-14 right-10 flex justify-center items-center text-4xl text-white text-center'>+</button>
     <div className='w-full h-full pb-40 overflow-y-scroll pt-5'>
      {
       groupNotes && groupNotes.map((item,index)=>{
        return <GroupcContent key={item.id} {...item} />
      })}
      {
        groupNotes && groupNotes.length==0 && (
        <div  className='w-full h-screen  text-[#001f8b] text-2xl font-sans flex text-wrap px-4 items-center justify-center'>
        Create Notes to Make life consistent
        </div>
       )}
     </div> 

     {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <h3 className="text-lg font-semibold">
                    Create New Group
                  </h3>
                </div>
                {/*body*/}
                <div className="flex items-center justify-between gap-3 p-3">
                <span className="text-md font-medium text-gray-900 inline" >Group Name </span>
                <input type="text" id="color" maxLength={20} value={groupName} onChange={(e) => setGroupName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-3xl focus:ring-blue-500 focus:border-blue-500 max-w-3xl ml-4 p-2.5" placeholder="Enter Group Name" required /> 
                </div>
                <div className="flex items-center  gap-3 p-3">
                <span className="text-md font-medium text-gray-900 inline" >Choose Colour </span>
                <div className='flex gap-3 items-start justify-center ml-4'>
                {
                  colorArray.map((item,index) =>{
                  return(
                  <button 
                    key={index} 
                    className={` h-6 w-6 rounded-full`}
                    style={{backgroundColor:item , width: color===item ? "28px":"24px",height: color===item ? "28px":"24px"}}
                    onClick={() =>setColor(item)}
                     ></button>
                    )
                  })
                }
                  
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                 {
                  groupName !=="" && color!=="" ? 
                  <button
                    className="bg-[#001f8b] text-white active:bg-[#001f8b] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 font-sans"
                    type="button" 
                    onClick={() => addNewGroup()} 
                  >
                    Create
                  </button>
                  :
                  <button
                    className="bg-[#6b7bb4] text-white active:bg-[#001f8b] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 font-sans"
                    type="button"
                
                  >
                   Create
                  </button>
                 } 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    
    </div>
  )
}
