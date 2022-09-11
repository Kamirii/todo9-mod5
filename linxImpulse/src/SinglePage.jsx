import { useState } from 'react'
import { Header } from "./components/Header/header.jsx"
import { Form } from "./components/form/form.jsx"
import {Divider} from "./components/divider/divider.jsx"

function SinglePage() {
  const [count, setCount] = useState(0)

  return (
  <div> 
   <Header/>
    <Form/>
    <Divider text="Sua seleção especial" />
    <Form></Form>
   </div>
   
  )
}

export default SinglePage
