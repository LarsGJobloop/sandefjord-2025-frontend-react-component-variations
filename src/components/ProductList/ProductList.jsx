import { products } from './products'

import style from './ProductList.module.css'
import { useState } from 'react'

export function ProductList() {
  return (
    <ul className={style.productList}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        )
      })}
    </ul>
  )
}

function useFavorite(id) {
  const [isProcessing, setProcessing] = useState()

  function favorite() {
    console.log("Favoriting product: " + id)
    setProcessing(true)
    setTimeout(() => setProcessing(false), 1000)
  }

  function unfavorite() {
    console.log("Unfavoriting product: " + id)
    setProcessing(true)
    setTimeout(() => setProcessing(false), 1000)
  }

  return {
    isProcessing,
    favorite,
    unfavorite
  }
}

function ProductCard({product}) {
  const {favorite, isProcessing, unfavorite} = useFavorite(product.id)

  return (
    <div className={style.productCard}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.description} />
      {
        product.favorited
          ? <button disabled={isProcessing} onClick={unfavorite} >Unfavorite</button>
          : <button disabled={isProcessing} onClick={favorite} >Favorite</button>
      }
    </div>
  )
}