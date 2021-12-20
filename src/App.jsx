import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import ResetCss from './styles/ResetCss';
import Theme from './styles/Theme';
import Home from './components/Home/Home';


function App() {
  return (
    <Theme>

      <BrowserRouter>
        <ResetCss />
        <GlobalStyle />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Theme>

  );
}

export default App;
