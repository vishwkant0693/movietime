import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Movies from './pages/Movies';

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
