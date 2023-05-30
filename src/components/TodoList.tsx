import React from 'react'
import { useState, useEffect } from 'react'
import TodoItem from './TodoItem';
import { TodoListStore } from '../stores/stores';
import { Action, TodoAddAction, TodoObject } from '../actions/TodolistAction';
import { TodoItemDispatcher } from '../dispatchers/TodoItemDispatcher';

const dispacher = new  TodoItemDispatcher();
const store = new TodoListStore ();

dispacher.register((action:Action)=>{
    store.handleAction(action);
});

export default function TodoList() {



    const [todoText,setTodo] = useState<string>('');
    const [todoList,setTodoList] = useState<TodoObject[]>([]);

   


    useEffect(()=>{
        const handleStoreChange = () => {
            setTodoList(store.getState());
          };
      
          store.register(handleStoreChange);
      
          return () => {
            store.unregister(handleStoreChange);
          };
    },[])
    

    

    var indexArray = 0;

    function addTodo() 
    {

        
        if (todoText !== '') {

            indexArray = indexArray + 1;

            const action = new TodoAddAction();
            action.data.todoText = todoText;
            action.data.id = indexArray;  

            dispacher.dispatch(action);


            
        }
        
       
    

    }

  return (
    <>{/*tirei a div aqui tbm pq nao precisava*/}
        
    {/*aqui eu so troquei de possição o input das tesks*/}
        <div className='input'>
            <input value={todoText} onChange={e => setTodo(e.target.value)}></input>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Tasks</label>
        <button onClick={addTodo}>add new</button>
        </div>
        <div className='tasks'>
            {/*tirei o ul e a li pq nao precisava*/}
            {todoList.map(todoList=>(
            <div className='task' id={todoList.id.toString()}>
                <TodoItem itemName ={todoList.todoText}/>
            </div>))}
            
            

        </div>
    </>
  )
}
