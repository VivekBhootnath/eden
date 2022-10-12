import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Page1/>} />
            <Route path="/Page2" element={<Page2/>} />
            <Route path="/Page3" element={<Page3/>} />
            <Route path="/Page4" element={<Page4/>} />
            
            
          </Routes>
    </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
