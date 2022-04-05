import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Dashboard</div>} />
      <Route path='/register' element={<div>Register</div>} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/*' element={<h1>ERROR</h1>} />

     
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
