import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import ResetCss from './styles/ResetCss';
import Theme from './styles/Theme';
import Home from './components/Home/Home';
import SubmitExam from './components/SubmitExam/SubmitExam';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <ResetCss />
        <GlobalStyle />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/submit" exact element={<SubmitExam />} />
        </Routes>
      </BrowserRouter>
    </Theme>

  );
}

export default App;
