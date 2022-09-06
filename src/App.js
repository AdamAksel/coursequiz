import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { Nav, Main } from './components/componentIndex'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <Main />
    </StyledApp>
  )
}

export default App
