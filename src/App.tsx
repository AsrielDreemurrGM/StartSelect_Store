import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import Header from './components/Header'
import { GlobalCSS } from './styles/styles'

import AllRoutes from './routes'
import Footer from './components/Footer'

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
      </BrowserRouter>
    </Provider>
  )
}

export default App
