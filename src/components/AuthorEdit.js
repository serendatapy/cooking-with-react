import React from 'react'

export default function AuthorEdit(props) {
  const {
    author,
    handleAuthorChange,
    handleAuthorDelete
  } = props

  function handleChange(changes) {
    handleAuthorChange(author.id, {...author,...changes })
  }

  return (
    <>
    <input
      className="recipe-edit__input"
      type ="text"
      onChange = {(e) => handleChange({name: e.target.value})}
      value = {author.name}
      />
    <button
      className = "btn btn--danger"
      onClick = {()=> handleAuthorDelete(author.id)}
      >
        &times;
      </button>
    </>
  )
}