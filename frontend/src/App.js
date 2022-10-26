import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/api/users' element={<Home />} />
            <Route path='/api/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
