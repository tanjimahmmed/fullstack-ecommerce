import Router from 'express'
import { listProducts, getProductsById, createProduct, updateProduct, deleteProduct } from './productsController'

// products endpoint

const router = Router()

router.get('/', listProducts)

router.get('/:id', getProductsById)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export default router;