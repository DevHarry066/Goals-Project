import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Dashboard/> }></Route>
        <Route path='/register' element={ <Register/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App; 