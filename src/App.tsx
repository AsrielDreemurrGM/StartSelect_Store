import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles/styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
