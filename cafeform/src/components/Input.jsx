import React from 'react'

const Input = ({id, label, error, ...props}) => {
  return (
    <div className='my-4 mx-0 h-fit max-[540px]:max-w-2xl min-[750px]:w-3/5 max-[320px]:text-sm'>
        <label className='block font-bold my-1' htmlFor={id}>{label}</label>
        <input className='block p-2 text-lg rounded-md text-emerald-800 font-bold w-full' id={id} {...props}/>
        {error}
    </div>
  )
}

export default Input