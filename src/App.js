import "./styles.css";
import React from 'react'

export default function App() {
    
    const [formData, setFormData]= React.useState({
      firstName: "",
      lastName: "",
      email:"",
      comment: "",
      checked: true
      
    })
    console.log(formData)
  
    
    function handleChange(event){
      const {type, name, checked, value} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      })

    }
  
    
   
    
    
    return (
        <form>

            <input
                type="text"
                placeholder="First Name"
                onChange= {handleChange}
                name= "firstName"
                value= {formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange= {handleChange}
                name= "lastName"
                value= {formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange= {handleChange}
                name= "email"
                value= {formData.email}
            />

            <textarea
              placeholder="Leave a comment"
              onChange={handleChange}
              name="comment"
              value={formData.comment}
            />

            <input 
              type="checkbox"
              onChange={handleChange}
              name="isFriendly"
              id="isFriendly"
              checked={formData.isFriendly}            
            />
            <label htmlFor="isFriendly">Are You Friendly</label>

        </form>
    )
}
