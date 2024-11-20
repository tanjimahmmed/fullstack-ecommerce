import express, { json, urlencoded } from 'express'
import productsRoutes from './routes/products/index.js'
import authRoutes from './routes/auth/index.js'

const port = 3000

const app = express()

app.use(urlencoded({extended: false}))
app.use(json())

app.get('/', (req, res) => {
    res.send('Hi 1 2 3 45')
})

app.use('/products', productsRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})