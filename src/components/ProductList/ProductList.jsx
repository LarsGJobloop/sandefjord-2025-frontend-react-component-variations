import { products } from './products'

import style from './ProductList.module.css'

export function ProductList() {
  return (
    <ul className={style.productList}>
      {products.map((product) => {
        return (
          <li key={product.id} className={style.productCard}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.description} />
          </li>
        )
      })}
    </ul>
  )
}