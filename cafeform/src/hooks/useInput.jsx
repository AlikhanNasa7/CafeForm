import { useState } from "react"
export const useInput = (defaultValue, validationFn)=>{
    const [value, setValue] = useState(defaultValue)
    const [edited, setEdited] = useState(false)
    const handleInputChange = (event) => {
        setValue(event.target.value)
        setEdited(true)
    }

    const handleBlurChange = () =>{
        setEdited(true)
    }
    const isValid = validationFn(value)
    return {
        value: value,
        handleBlurChange,
        handleInputChange,
        hasError: !isValid && edited
    }
}