import React from 'react'

interface TodoItemProps{
  itemName: string;

}


export default function TodoItem(props : TodoItemProps) {
  return (
    <>{/*tirei essa tbm div q tava aqui envolta de tudo*/}  
    {/*tirei a div q tava aqui envolta*/}  
      {props.itemName}
      <input type='checkbox' value={'DONE'}></input>
      
    </>
  )
}
