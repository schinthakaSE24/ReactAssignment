import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import DepListing from './Department';

function App() {
  return (
    <div className="App">
      <b><h2>Employee Management Application</h2></b>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/Departments' element={<DepListing />}></Route>

          <Route path='/employee/detail/:empNo' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empNo' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
