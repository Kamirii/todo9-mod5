import { useState } from 'react'
import { Header } from "./components/Header/header.jsx"
import { Form } from "./components/Form/form.jsx"
import {Divider} from "./components/divider/divider.jsx"
import {FormShare} from "./components/FormShare/formShare.jsx"
import {Footer} from "./components/Footer/footer.jsx"

function SinglePage() {
  const [count, setCount] = useState(0)

  return (
  <div> 
   <Header/>
    <Form/>
    <Divider text="Sua seleção especial" />
    <Form/>
    <Divider text="Compartilhe a novidade" />
    <Form/>
    <FormShare/>
    <Footer/>
    
   </div>
   
  )
}

export default SinglePage
