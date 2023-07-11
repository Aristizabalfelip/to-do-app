import React from 'react'
import ToDo from './ToDo'

function ToDoList({ list, setList,sTag}) {
  return (
    <div>
      {
        list?.map((tasks) => {
          return < ToDo
            id={tasks.id}
            name={tasks.name}
            priority={tasks.priority}
            deadline={tasks.deadline}
            tag={tasks.tag}
            setList={setList}
            sTag={sTag}
          />
        })
      }
    </div>
  )
}

export default ToDoList