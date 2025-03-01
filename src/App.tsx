import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles/styles'
import ProductList from './Containers/ProductList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" background="gray" />
        <ProductList title="Em Breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="globalContainer">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
