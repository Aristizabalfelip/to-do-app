import React from 'react'
import ToDo from './ToDo'

function ToDoList({ list, setList,setMemory,memory}) {
  return (
    <div style={{display:'flex',gap:'20px'}}>
      <button>ascendente</button>
      <button>descendente</button>
      {
        list?.map((tasks) => {
          return < ToDo
          key={tasks.id}
            id={tasks.id}
            done={tasks.done}
            name={tasks.name}
            priority={tasks.priority}
            deadline={tasks.deadline}
            tag={tasks.tag}
            setList={setList}
            setMemory ={setMemory}
            memory={memory}
          />
        })
      }
    </div>
  )
}

export default ToDoList