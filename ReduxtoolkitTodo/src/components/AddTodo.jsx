import React,{useState ,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo ,updateTodo, isUpdateTodo } from '../features/todo/Todoslice';

function AddTodo() {
    const [input,setInput] = useState('');
    const [updatetodo,setUpdateTodo] = useState({});
    const dispatch = useDispatch();

    const updatedTodo = useSelector(state => state.updatedTodo);
  

    const addTodoHandler = (e) =>{
        e.preventDefault();
      if(input ===""){
         alert("please fill the input field to add todo in your list")
      }else{

        dispatch(addTodo(input));
      }

        setInput('')
    }
    const updateTodoHandler = (e) =>{
        e.preventDefault();
      if(input === ""){
         alert("please fill the input field to add todo in your list")
      }else{
        const todo = {
          id:updatedTodo.id,
          text:input
        }
        dispatch(updateTodo(todo));
        dispatch(isUpdateTodo({}));
        setInput('')

      }

        setInput('')
    }


    useEffect(() => {
     if(updatedTodo && updatedTodo.text ){
      setInput(updatedTodo.text);
     }
    }, [updatedTodo])
    
  return (
    <form className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={ input}
      onChange={(e) => setInput(e.target.value)}
    />
   {  Object.keys(updatedTodo).length !== 0  ?
   
    <button
      type="submit"
      onClick={updateTodoHandler}
      className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      update Todo
    </button>
    :
    <button
      type="submit"
      onClick={addTodoHandler}
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
   }
  </form>
  )
}

export default AddTodo
