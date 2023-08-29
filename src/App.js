import "./styles.css";
import React from 'react'

export default function App() {
    
    const [formData, setFormData]= React.useState({
      firstName: "",
      lastName: ""
    })
    console.log(formData)
    
    
    function handleChange(){
    
      setFormData(prevFormData => {
        return {...prevFormData,
        [event.target.name]: event.target.value}
      })
      
    }
  
    
   
    
    
    return (
        <form>

            <input
                type="text"
                placeholder="First Name"
                onChange= {handleChange}
                name= "firstName"
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange= {handleChange}
                name= "lastName"
            />
        </form>
    )
}
