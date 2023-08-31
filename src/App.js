import "./styles.css";
import React from 'react'

export default function App() {
    
    const [formData, setFormData]= React.useState({
      firstName: "",
      lastName: "",
      email:"",
      comment: "",
      isFriendly: true,
      employment: "",
      favColor: ""
      
    })
   
  
    
    function handleChange(event){
      const {type, name, checked, value} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      })
      
    }
  
    
   function handleSubmit (){
      eventthat .preventDefault()
      console.log(formData)
   }
    
    
    return (
        <form onSubmit={handleSubmit}>

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
            <br/>
            <br/>
            <fieldset>
                <legend>Current employment status </legend>
                <input 
                  type="radio"
                  id = "unemployed"
                  name="employment"
                  value="unemployed"
                  onChange={handleChange}
                  checked={formData.employment === "unemployed"}
                  />
                <label htmlFor="unemployed">Unemployd</label>
                <br/>
                <input 
                  type="radio"
                  id = "part-time"
                  name="employment"
                  value="part-time"
                  onChange={handleChange}
                  checked={formData.employment === "part-time"}
                  />
                <label htmlFor="part-time">Part-Time</label>
                <br/>
                <input 
                  type="radio"
                  id = "full-time"
                  name="employment"
                  value="full-time"
                  onChange={handleChange}
                  checked={formData.employment === "full-time"}
                  />
                <label htmlFor="full-time">Full-Time</label>
                <br/>
            </fieldset>
            <br/>
            <select
                  id="favColor"
                  value={formData.favColor}
                  onChange={handleChange}
                  name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>

            </select>
            <button >Submit</button>
        </form>
    )
}
