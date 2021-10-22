import { FC, useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { useActionCreators } from '../hooks/useAC'
import { UseTypedSelector } from '../hooks/useTypedSelector'


const ProductContent: FC = () => {

  const { getProductsThunk } = useActionCreators()
  const { products } = UseTypedSelector((state) => state.ProductContent)

  useEffect(() => {
    getProductsThunk()
  }, [])

  return (
    <div className='container' >
      <div className='ProductContent_items' style={{paddingTop:'20px'}} >
        {products.map((product) => <ProductCard key={product.productName} {...product} /> )}
      </div>
    </div>
  )
}

export default ProductContent
