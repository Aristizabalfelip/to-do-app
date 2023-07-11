import React from 'react'

function TagsMenu({ tag , setList }) {

  const handlClick = () => {
    setList((prev) => {
      return prev.filter(tasks=> tasks.tag === tag.replace('#', ""))
  } )
  }

  return (
    <button onClick={handlClick}>{tag}</button>
  )
}

export default TagsMenu