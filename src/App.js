import { Home } from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import TutorL from './Components/TutorL';
import TutorH from './Components/TutorH';
import StudentL from "./Components/StudentL";
import StudentH from "./Components/StudentH";
import HodL from './Components/HodL';
import HodH from './Components/HodeH';
import WadernL from './Components/WadernL';
import WadernH from './Components/WadernH';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/StudentL' element={<StudentL/>}></Route>
        <Route path='/StudentH' element={<StudentH/>}></Route>
        <Route path='/TutorL' element={<TutorL/>}></Route>
        <Route path='/TutorH' element={<TutorH/>}></Route>
        <Route path='/HodL' element={<HodL/>}></Route>
        <Route path='/HodH' element={<HodH/>}></Route>
        <Route path='/WadernL' element={<WadernL/>}></Route>
        <Route path='/WadernH' element={<WadernH/>}></Route> 
      </Routes>
      
    </div>
  );
}

export default App;
