import { useEffect, useState } from 'react'
import { Header } from "./components/Header/header.jsx"
import { Form } from "./components/Form/form.jsx"
import { Divider } from "./components/divider/divider.jsx"
import { ProductLayout } from "./components/product/productLayout"
import { FormShare } from "./components/FormShare/formShare.jsx"
import { Footer } from "./components/Footer/footer.jsx"
import styles from "./components/product/product.module.css"
function SinglePage() {

  const [product, setProduct] = useState([])
  const [page, setPage] = useState(1)
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`

  const getApi = async () => {
      let res = await fetch(url).then((data) => data.json());
      setPage(page + 1);
      setProduct([...product, ...res.products]);
      console.log(res)
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <Header />
      <Form />
      <Divider text="Sua seleção especial" />
      
      <div className={styles.card}>
      {product.map(produto => {
        return (
          <ProductLayout
            key={produto.id}
            image={produto.image}
            name={produto.name}
            description={produto.description}      
            oldPrice={`De: R$${produto.oldPrice},00`}
            specialOffer={`Por: R$${produto.price},00`}
            installments={`ou ${produto.installments.count}x de R$${produto.installments.value}0`} 
            />   
        )
      })}
      </div>  

      <div className={styles.moreContent}>
      <button className={styles.buttonProduct} onClick={getApi}>Ainda mais produtos!</button>
      </div>

      <Divider text="Compartilhe a novidade" />
      <FormShare />
      <Footer />
    </div>
 )
}

export default SinglePage
