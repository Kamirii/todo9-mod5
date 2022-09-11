import { useState } from 'react'
import { Header } from "./components/Header/header.jsx"
import { Form } from "./components/form/form.jsx"
function SinglePage() {
  const [count, setCount] = useState(0)

  return (
  <main> 
   <Header/>
    <Form />
   </main>
   
  )
}

export default SinglePage
