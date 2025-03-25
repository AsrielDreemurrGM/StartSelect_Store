import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import { GlobalCSS } from './styles/styles'

import AllRoutes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="globalContainer">
          <Header />
        </div>
        <AllRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
