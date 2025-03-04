import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles/styles'

import AllRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="globalContainer">
        <Header />
      </div>
      <AllRoutes />
    </BrowserRouter>
  )
}

export default App
