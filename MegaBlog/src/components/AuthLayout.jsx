import React,{useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication= true}) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    console.log("aaya",authStatus);

    useEffect(()=>{
    // todo : make it more easy
    // if(authStatus == true ) navigate("/login") 
    //  else navigate("/")    
    
    if(authentication && authStatus !== authentication){
      console.log("hey");
      navigate("/login")
  } else if(!authentication && authStatus !== authentication){
    console.log("Hello");
      navigate("/")
  }
  setLoader(false)
    },[authStatus, navigate,authentication])

 return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
