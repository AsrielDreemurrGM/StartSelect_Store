import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles/styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="globalContainer">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
