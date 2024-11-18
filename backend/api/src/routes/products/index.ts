import Router from 'express'
import { listProducts, getProductsById, createProduct, updateProduct, deleteProduct } from './productsController'
import { validateData } from '../../middlewares/validationMiddleware'

import { createProductSchema, updateProductSchema } from '../../db/productsSchema';



// products endpoint

const router = Router()

router.get('/', listProducts)

router.get('/:id', getProductsById)

router.post('/', validateData(createProductSchema), createProduct)

router.put('/:id', validateData(updateProductSchema), updateProduct)

router.delete('/:id', deleteProduct)

export default router;