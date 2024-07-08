import  React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Nav } from "./Nav"
import { Product } from "./Product"
import { About } from "./About"
import { Contact } from "./Contact"

export const Landing=()=>{
    return(
  <BrowserRouter>
  <Nav/>
    <Routes>
    <Route path="product" element={<Product/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    
    
    </Routes>
  
  </BrowserRouter>
    )
}