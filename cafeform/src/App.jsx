import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
function App() {

  return (
    <div className='m-auto w-5/6 mt-20 text-slate-300'>
      <Header title='Cafe form'/>
      <Form />
    </div>
  )
}

export default App
