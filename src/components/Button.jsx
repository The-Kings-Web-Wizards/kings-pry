import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
  return (
    <Link to={props.path} className='px-5 py-3.5 bg-[#004d24] w-30 rounded-lg text-white '>{props.name}</Link>
  )
}

export default Button