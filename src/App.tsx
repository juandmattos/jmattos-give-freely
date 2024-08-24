import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Pages
import AppLayout from './pages/AppLayout'
import NotFound from './pages/NotFound'
import Products from './pages/products/Products'
import Product from './pages/products/Product'
import CreateProduct from './pages/products/CreateProduct'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Navigate replace to={'products'} />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<Product />} />
            <Route path='products-add' element={<CreateProduct />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{
          margin: '8px',
        }}
        toastOptions={{
          success: {
            duration: 3000, // 3 seconds
          },
          error: {
            duration: 5000, // 5 seconds
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#2563eb',
            color: 'white',
          },
        }}
      />
    </>
  )
}

export default App
