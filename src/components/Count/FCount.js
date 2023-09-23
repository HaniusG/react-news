import { useState } from "react"
import "./count.css"

export default function FCount() {
    const [value, setValue] = useState(0)
    const [error, setError] = useState(false)

    const changeValue = (value) =>{
        setValue(value)
        setError(false)
    }

    const onMinus = () => changeValue(value-1)
    
    const onPlus = () => changeValue(value+1)

    const onInputChange = (e) => {
        const value = Number(e.target.value.trim());

        if(isNaN(value)){
            return setError(true)
        }

        setError(false)
        setValue(value)
    }

    return (
        <div className="counter">
            <button onClick={onMinus}>-</button>
            <input type="text" onChange={onInputChange} value={value}/>
            <button onClick={onPlus}>+</button>
            {error ? <div className="errorDiv">Input only number</div> : null}

        </div>
    )
}