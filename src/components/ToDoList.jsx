import React from 'react'
import ToDo from './ToDo'

function ToDoList({ list, setList,sTag,memory,setMemory,setStateDone}) {
  return (
    <div style={{display:'flex',gap:'20px'}}>
      {
        list?.map((tasks) => {
          return < ToDo
          key={tasks.id}
            id={tasks.id}
            name={tasks.name}
            priority={tasks.priority}
            deadline={tasks.deadline}
            tag={tasks.tag}
            setList={setList}
            sTag={sTag}
            memory={memory}
            setMemory ={setMemory}
            setStateDone= {setStateDone}
          />
        })
      }
    </div>
  )
}

export default ToDoList