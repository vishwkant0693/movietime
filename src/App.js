import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Movies from './pages/Movies';

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
