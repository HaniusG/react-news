import { useState } from 'react'
import './dark-theme-toggle.css'
export default function DarkThemeToggle({children}){
    const [isToggled, setIsToggled] = useState(false)

    const changeTheme = () =>{
        setIsToggled(!isToggled);
    }

    return(
        <div style={{backgroundColor: isToggled ? 'rgb(30, 30, 30)': "#EBEBEB"}}>
            {isToggled ? <label htmlFor='backgroundTheme'>White</label>: <label htmlFor ='backgroundTheme' style={{color: '#EBEBEB'}}>Dark</label>}
            <input type="checkbox" onChange={changeTheme} name = "backgroundTheme" id='backgroundTheme' style={{display: 'none'}}/>
            {children}
        </div>
    )
}