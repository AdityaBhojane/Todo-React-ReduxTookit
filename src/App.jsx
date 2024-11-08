
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux-toolkit/slice/todoSlice';

function App() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  function addTodoToStore (){
    dispatch(addTodo(value))
  }
  function removeTodoToStore(id){
    dispatch(removeTodo(id))
  }
  console.log(value)

  return (
    <div className='m-10'>
       <h1 className='text-xl my-5'>Todo App</h1>
       <div className='flex gap-5 mb-5'>
          <input className='p-2 rounded-md' value={value} onChange={e=>setValue(e.target.value)} type="text" placeholder='add text'/>
          <button onClick={addTodoToStore} className='p-2 rounded-md bg-slate-500'>Add Todo</button>
       </div>
       <div>
            {todos.map((todo,index)=> {
              return <>
                <div key={index} className='flex'>
                   <h2>{todo.text}</h2>
                   <p onClick={()=>removeTodoToStore(todo.id)} className='cursor-pointer'>❎</p>
                </div>
              </>
            })}
       </div>
    </div>
  )
}

export default App