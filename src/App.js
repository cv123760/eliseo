import React,{useState} from "react";
import axios from "axios"

function App() {

  const [email, setEmail] = useState({
    name: "", 
    email: "", 
    message: ""
  })

  const handleChange = event=>{
    const name = event.target.name
    const value = event.target.value

    setEmail(prev=>{
      return{...prev, [name]:value}
    })

  }

  const handleClick = ()=>{
    axios.post("new-lead", email)
    setEmail({
      name: "", 
      email: "", 
      message: ""
    })
  }



  return (
    <div className="App">

      <h3>CONTACT US</h3>

      <form>

        <input 
          name="name" 
          placeholder="NAME" 
          type="text" 
          onChange={(event=>{
            handleChange(event)
          })}
          value={email.name}
        /> 
        
        <input 
          name="email" 
          placeholder="EMAIL" 
          type="email" 
          onChange={(event=>{
            handleChange(event)
          })}
          value={email.email}
        /> 
        
        <input 
          className="message" 
          name="message" 
          placeholder="MESSAGE" 
          type="text" 
          onChange={(event=>{
            handleChange(event)
          })}
          value={email.message}
        /> 
        
        <button 
          type="submit"
          onClick={event=>{
            event.preventDefault()
            if (email.email.includes("@")) {handleClick()}
            else{alert("Please enter a valid Email address")}
          }}
          > SEND</button>


      </form>
      
    </div>
  );
}

export default App;
