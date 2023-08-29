import "./styles.css";
import React from 'react'

export default function App() {
    
    const [firstName, setFirstName]= React.useState('')
    console.log(firstName)
    function handleChange(event){
      setFirstName(event.target.placeholder)
    }
    
    return (
        <form>

            <input
                type="text"
                placeholder="First Name"
                onChange= {handleChange}
                
            />
        </form>
    )
}
