
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,signIn } from './actions';
import { useState } from 'react';



function App() {
  const [Title, setTitle] = useState("");
  const counter =  useSelector(state => state.counter)
  const isLogged =  useSelector(state => state.isLogged)
  const myTodo = useSelector(state => state.myTodo)
  const dispatch = useDispatch();

 const [activeIndex, setActiveIndex] = useState();
 const [Button, setButton] = useState("Add Todo");


 const AddTodo =()=> {

    if(Button == "Add Todo"){
      dispatch(
        // collect two parameters (type and payload)
    
        {type: "ADD_TODO", payload: {data: Title}}
      )
      setTitle("")
    }else {
    
      todos[activeIndex] = Title
      dispatch(
        // collect two parameters (type and payload)

    
        {type: "UPDATE", payload: {data: todos}}
      )
      setTitle("")
      setButton("Add Todo")

    }

 }

 const todos = myTodo.todos
console.log(todos);
  const edit = (i)=>{
    setTitle(todos[i]) 
    setActiveIndex(i)
    setButton("Update")
  }
  const deleteTodo = (i)=>{
   
  todos.splice(i,1)


  dispatch(
    // collect two parameters (type and payload)


    {type: "UPDATE", payload: {data: todos}}
  )

  }



  return ( 
    <div className="container">

     <div className='col-lg-6'>
    
   
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Add Todo</label>
            <input type="email" value={Title} onChange={(e)=>setTitle(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
        
          <button type="submit" className='btn btn-primary mb-3 mt-3' onClick={AddTodo}>{Button}</button>
   


     </div>

     <table className='table'>
        <thead>
            <th>Todos</th>
            <th>Action</th>
        </thead>
        <tbody>
        {

          todos.map((item, i)=> (
            <tr key="">
            <td>{item}</td>
            <td><button className='btn btn-primary' onClick={()=>edit(i)}>Edit</button> <button className='btn btn-danger' onClick={()=>deleteTodo(i)}>Delete</button></td>
          </tr>
          ))
        }
         
        </tbody>
     </table>
    </div>
  );
}


export default App;
