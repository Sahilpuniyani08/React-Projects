import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header ,Footer, Login} from './components'
import './App.css'
import { Outlet } from 'react-router-dom';
function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if(userData){
      console.log("lsls")
      dispatch(login({userData}))
    } else{
      console.log("logout")
      dispatch(logout())
    }
  })
  .finally(() =>setLoading(false))

}, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
  
      {/* Todo outlet */}
      <main>
      TODO:  <Outlet />
      </main>
      <Footer />
    </div>
    </div>
  ) :null;
    
}

export default App
