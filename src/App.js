import "./styles.css";
import React from 'react'

export default function App() {
    
    const [firstName, setFirstName]= React.useState('')
    const [lastName, setLastName]= React.useState('')
  
    console.log(firstName)
    function handleChange(event){
      if (event.target.placeholder=== "First Name"){
        setFirstName(event.target.value)
      }else if (event.target.placeholder === "Last Name"){
        setLastName(event.target.value)
      }
    }
    
    return (
        <form>

            <input
                type="text"
                placeholder="First Name"
                onChange= {handleChange}
                
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange= {handleChange}
                
            />
        </form>
    )
}
