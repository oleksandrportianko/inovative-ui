import { Routes, Route } from 'react-router-dom'

import { Elements } from './pages/elements/Elements';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Elements />} />  
      </Routes>      
    </div>
  );
}

export default App;
