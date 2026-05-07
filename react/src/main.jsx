import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Navbar from './Comps/Navbar'
import Input from './Comps/Input'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Input 
     type={"text"}
     name={name}
     placeholder={"Enter your name"}
    />
    <Input 
     type={"Password"}
     name={name}
     placeholder={"Enter your Password"}
    />
  </StrictMode>,
)
