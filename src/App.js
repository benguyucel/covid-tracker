import { createGlobalStyle } from 'styled-components'
import Header from './components/Header';
import TotalCases from './components/TotalCases';
const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;box-sizing:border-box; }
body{
  background-color:#aaa69d ;
  padding: 0 2rem ;

}
html{
  font-size: 62.5%;
}
`
function App() {

  return (
    <>
      <Header />
      <TotalCases />
      <GlobalStyle />
    </>
  );
}

export default App;
