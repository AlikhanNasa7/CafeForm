import React from 'react'

const Header = ({title}) => {
  return (
    <div className='w-auto my-4'>
        <p className='text-4xl font-normal text-center'>{title}</p>
    </div>
  )
}

export default Header