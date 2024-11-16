import { Request, Response } from "express"

export function listProducts(req: Request, res: Response) {
    res.send('The list of products')
}

export function getProductsById(req: Request, res: Response) {
    res.send('Get product by id')
}

export function createProduct(req: Request, res: Response) {
    res.send('Create product')
}

export function updateProduct(req: Request, res: Response) {
    res.send('Update product')
}

export function deleteProduct(req: Request, res: Response) {
    res.send('Delete product')
}