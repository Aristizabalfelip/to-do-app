import React from 'react'
import ToDo from './ToDo'

function ToDoList({ list }) {
  return (
    <div>
      {
        list?.map((tasks) => {
          return < ToDo
            name={tasks.name}
            priority={tasks.priority}
            deadline={tasks.deadline}
            tag={tasks.tag}
          />
        })
      }
    </div>
  )
}

export default ToDoList