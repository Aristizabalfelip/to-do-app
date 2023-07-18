import React, { useState } from 'react'
import ToDo from './ToDo'

function ToDoList({ list, setList, setMemory, memory}) {

  const [stop, setStop] = useState(true)

  const handleAscen = () => {
    setList(prev => [...prev].sort((a,b)=> new Date (a.deadline).getTime() - new Date (b.deadline).getTime()))
    setMemory(prev => [...prev].sort((a,b)=> new Date (a.deadline).getTime() - new Date (b.deadline).getTime()))
  }

  const handleDescen = () => {
    setList(prev => [...prev].sort((a,b)=> new Date (b.deadline).getTime() - new Date (a.deadline).getTime()))
    setMemory(prev => [...prev].sort((a,b)=> new Date (b.deadline).getTime() - new Date (a.deadline).getTime()))
  }
  
  const handleStopAlert = () => {
    setStop(prev => !prev)
  }


  return (
    <>
 
      <div className="flex flex-col gap-20">
        <section className="flex gap-10 justify-end mr-10">
          <button className='rounded-lg bg-black bg-opacity-10 p-2' onClick={handleAscen}>ascendente</button>
          <button className='rounded-lg bg-black bg-opacity-10 p-2' onClick={handleDescen}>descendente</button>
          <button className='rounded-lg bg-black bg-opacity-10 p-2' onClick={handleStopAlert}>{`Alert ${stop === true ?'⏹️' :'▶️'}`}</button>
  
        </section>
        <section className="flex gap-20 flex-wrap	" >
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
                setMemory={setMemory}
                memory={memory}
                stop = {stop}
              />
            })
          }
        </section>
      </div>
    </>
  )
}

export default ToDoList