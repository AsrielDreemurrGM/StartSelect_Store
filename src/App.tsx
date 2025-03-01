import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles/styles'
import Home from './Pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
