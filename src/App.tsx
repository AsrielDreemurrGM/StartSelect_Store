import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles/styles'

import AllRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="globalContainer">
        <Header />
      </div>
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
