import { Routes, Route } from 'react-router-dom'

import { Elements } from './pages/elements/elements.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/elements' element={<Elements />} />  
      </Routes>      
    </div>
  );
}

export default App;
