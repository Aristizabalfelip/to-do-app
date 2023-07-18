


function ToDo({ name, id, priority, deadline, tag, setList,
     setMemory,memory,done,stop}) {

        

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
    const blinckFunt = (priority) => {
        if (priority === 'Hight' && stop === true) {
            return "p-5 flex rounded-lg gap-5 blink"
        }else {
            return  "p-5 flex rounded-lg gap-5"
        }
    }
    console.log(stop);

    
    const colorPriority = (color) => {
        if (color === 'color') {
            if (priority === 'Low') {
                return '#779ecb'
            } if (priority === 'Medium') {
                return '#fdfd96'
            } else {
                return '#a12312'
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

        <div className={blinckFunt(priority)} style={{ backgroundColor: colorPriority('color') }}>
            <div>
                <h2 className="text-2xl" style={{ textDecoration: done ? 'line-through' : 'none', display: 'flex', alignItems: 'center' }}>{name} <p>{colorPriority('emoji')}</p> </h2>
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

  