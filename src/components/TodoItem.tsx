import React from 'react'

interface TodoItemProps{
  itemName: string;

}


export default function TodoItem(props : TodoItemProps) {
  return (
    <>
      {props.itemName}
      <input type='checkbox' value={'DONE'}></input>
      
    </>
  )
}
