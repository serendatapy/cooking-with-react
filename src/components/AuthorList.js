import React from 'react'
import Author from './Author'

/*Another way of writing the component, with definitions
outside of return, then inserted as variable*/
export default function AuthorList({ authors })
{
  const authorElements = authors.map
  (author => {
    return <Author key = {author.id}
    {...author} />
  })

  return (
    <div className="author-grid">
      {authorElements}
    </div>
  )
}