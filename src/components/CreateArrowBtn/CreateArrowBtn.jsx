import React from 'react'

function CreateArrowBtn({arrowtype,onClick }) {
  return (
    <button onClick={onClick} className={`home__slider-arrow ${arrowtype}-arrow`} />
  )
}

export default CreateArrowBtn