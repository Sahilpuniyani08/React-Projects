import React, { useCallback, useEffect, useState  ,useRef} from 'react'

const PasswordGenerator = () => {
  const [length , setLength ] = useState(8); 
  const [isNumber , setIsNumber ] = useState(false); 
  const [isCharacter , setIsCharacter ] = useState(false); 
  const [password , setPassword ] = useState(""); 
  // useRef hook
  const passwordRef = useRef(null);

const PassGenerator = useCallback(()=>{
let pass = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(isNumber) str += "0123456789"
if(isCharacter) str += "!@#$%^&*(){}[]+=-~`"

for (let i = 1; i < length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char);
}
setPassword(pass);
}, [length , isNumber,isCharacter , setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,4);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
 PassGenerator()
}, [isNumber,isCharacter,length,PassGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center font-mono'>Password Generator</h1>
    <div className='flex shadow-md rounded-lg overflow-hidden mb-4 my-3'> 
    
    <input
     type="text" 
     value={password}
     className='outline-none w-full py-1 px-3'
     placeholder='Password'
     ref={passwordRef}
     readOnly
     />
<button
onClick={copyPasswordToClipboard}
 className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>

    <div className="flex text-sm gap-x-2">
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
         />
         <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={isNumber}
         id="numberInput"
         onChange={()=>{setIsNumber((prev) => !prev)}}
          />
          <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={isCharacter}
         id="alphabetInput"
         onChange={()=>{setIsCharacter((prev) => !prev)}}
          />
          <label>Characters</label>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default PasswordGenerator