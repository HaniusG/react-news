import { useState } from 'react'
import './dark-theme-toggle.css'

export default function DarkThemeToggle(){
    const [isToggled, setIsToggled] = useState(false)

    const changeTheme = () =>{
        setIsToggled(!isToggled);
        isToggled ? document.body.style.backgroundColor = "rgb(30, 30, 30)" : document.body.style.backgroundColor = "#EBEBEB";
    }

    return(
        <div>
            
            {isToggled ? <label>White</label>: <label style={{color: '#EBEBEB'}}>Dark</label>}
            <input type="checkbox" onChange={changeTheme} name = "background"/>
        </div>
    )
}