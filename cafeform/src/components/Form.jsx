import React, {useState} from 'react'
import Input from './Input'
import { isEmpty,isNumber } from './validation/validation'
import { useInput } from '../hooks/useInput'
import Modal from './Modal'
const Form = () => {
  const [action,setAction] = useState(null)
  const [data, setData] = useState(null)
  const [showModal,setShowModal] = useState(false)
  const {
    value: nameValue,
    handleBlurChange: handleNameBlurChange,
    handleInputChange: handleNameInputChange,
    hasError: nameHasError
  } = useInput('', (value)=>!isEmpty(value))

  const {
    value: customerValue,
    handleBlurChange: handleCustomerBlurChange,
    handleInputChange: handleCustomerInputChange,
    hasError: customerHasError
  } = useInput('', (value)=>!isEmpty(value) && isNumber(value))

  const {
    value: costValue,
    handleBlurChange: handleCostBlurChange,
    handleInputChange: handleCostInputChange,
    hasError: costHasError
  } = useInput('', (value)=>!isEmpty(value) && isNumber(value))

  const handleSubmit = (event)=>{
    event.preventDefault()
    if (costHasError || customerHasError || nameHasError){
      return
    }
    const fd = new FormData(event.target)
    const data = Object.fromEntries(fd.entries())
    fetchDataSimulator(data)
  }
  const fetchDataSimulator = (data) =>{
    setAction('loading')
    setShowModal(true)
    setTimeout(()=>{
      setAction('showing')
      setData(data)
    },2000)
  }
  return (
    <>
      {showModal && <Modal action={action} data={data}>
        <button className='block bg-white px-2 py-1 m-auto rounded-lg' onClick={()=>setShowModal(false)}>Ok</button>
      </Modal>}
      <form className='m-auto w-full max-w-[40rem] min-w-[16rem] rounded-lg h-fit bg-royalblue p-6' onSubmit={handleSubmit}>
          <h2 className='text-4xl mb-2 max-[560px]:text-2xl'>Hello cheif!</h2>
          <p className='text-1xl'>We need some data for your advantage!</p>

          <Input 
            label='Cafe Name' 
            type='text' 
            id='name' 
            name='name' 
            required
            value={nameValue} 
            onChange={handleNameInputChange} 
            onBlur={handleNameBlurChange}
            error={nameHasError && <p className='text-rose-500 mt-1'>Cafe name should not be empty</p>}
          />
          <hr />
          <div className='flex max-[750px]:block justify-start gap-4 text-base max-[1300px]:text-[0.95rem]'>
              <Input 
                label='Number of Customers' 
                type='number' 
                id='numberOfcustomers' 
                name='numberOfCustomers' 
                required
                value={customerValue} 
                onChange={handleCustomerInputChange} 
                onBlur={handleCustomerBlurChange}
                error={customerHasError && <p className='text-rose-500 mt-1'>Your customer value should be a number</p>}
              />
              <Input 
                label='Average Spend Per Customer' 
                type='number' 
                id='spendPerCustomer' 
                name='spendPerCustomer' 
                required
                value={costValue}
                onChange={handleCostInputChange} 
                onBlur={handleCostBlurChange}
                error={costHasError && <p className='text-rose-500 mt-1'>Your spend value should be a number!</p>}
              />
          </div>
          <p className="flex justify-end gap-4 my-4">
            <button type="reset" className="bg-white text-black px-2 rounded-md py-1">
              Reset
            </button>
            <button type="submit" className="bg-white text-black px-2 rounded-md py-1">
              Sign up
            </button>
          </p>
      </form>
    </>
  )
}

export default Form