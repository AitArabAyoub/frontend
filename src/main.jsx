import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Product from './Pages/Product/Product.jsx'
import Category from './Pages/Category/Category.jsx'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='product/' element={<Product/>}>
      <Route path=':prodid' element={<Product/>}/>
    </Route>
    <Route path='category/' element={<Category/>}>
      <Route path=':catid' element={<Category/>}/>
    </Route>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
