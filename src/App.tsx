import Header from './components/Header'
import { GlobalCSS, GlobalContainer } from './styles/styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <GlobalContainer>
        <Header />
      </GlobalContainer>
    </>
  )
}

export default App
