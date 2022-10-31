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
        <div className='container h-full mx-auto'>
          <div className='bg-white h-full'>
            <div className='mx-auto h-full max-w-7x1'>
              <div className='z-9 bg-white h-full lg:w-full grid grid-rows-[92px_1fr]'>
                <Header />
                <main className='mx-auto py-2 max-w-7xl px-4 sm:px-6 sm:py-4 lg:px-8 w-full overflow-auto'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
                </main>
              </div>
            </div>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
