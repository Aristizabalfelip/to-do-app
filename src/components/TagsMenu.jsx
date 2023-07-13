import React from 'react'

function TagsMenu({ tag , setList,memory}) {

  const handleClick = () => {
    setList(() => {
       return tag === 'all' ? memory  : memory.filter(tasks=> tasks.tag === tag)
  } )



  }

  return (
    <button onClick={handleClick}>#{tag}</button>
  )
}

export default TagsMenu