import React, { useState } from 'react'


function ToDo({ name, id, priority, deadline, tag, setList,
     setMemory,memory,done}) {

    const handleClickDelete = () => {

        setMemory((prev) => {
            return prev.filter(taks => taks.id !== id)
        })
        setList((prev) => {
            return prev.filter(taks => taks.id !== id)
        })
        
    }
    const handleClickDone = () => {
       const index = memory.findIndex(taks=> taks.id === id)
       const nuevoArray = [...memory]
       nuevoArray[index].done = !(nuevoArray[index].done)
       setMemory(nuevoArray)
       setList(nuevoArray)
    }

    
    const colorPriority = (color) => {
        if (color === 'color') {


            if (priority === 'Low') {
                return '#779ecb'
            } if (priority === 'Medium') {
                return '#fdfd96'
            } else {
                return '#de4c8a'
            }
        } else {
            if (priority === 'Low') {
                return '😴'
            } if (priority === 'Medium') {
                return '🤔'
            } else {
                return '😱'
            }
        }

    }


    return (
        <>
        <div style={{ backgroundColor: colorPriority('color') }}>
            <div>
                <h2 style={{ textDecoration: done ? 'line-through' : 'none', display: 'flex', alignItems: 'center' }}>{name} <p>{colorPriority('emoji')}</p> </h2>
                <p style={{ textDecoration: done ? 'line-through' : 'none' }}>{`#${tag}`}</p>
                <p style={{ textDecoration: done ? 'line-through' : 'none' }}>Priority: {priority}</p>
                <p style={{ textDecoration: done ? 'line-through' : 'none' }}>Finish date: {deadline}</p>
            </div>
            <div>
                <button onClick={handleClickDelete}>🗑️</button>
          
                <button onClick={handleClickDone}>{done ? '🔄️' :'✅'}</button>
            </div>
        </div>
        </>
    )
}

export default ToDo

  