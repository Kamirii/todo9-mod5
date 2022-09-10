import { useState } from 'react'
import { Header } from "./components/Header/header.jsx"

function SinglePage() {
  const [count, setCount] = useState(0)

  return (
  <header> 
   <Header /> 
   </header>
  )
}

export default SinglePage
