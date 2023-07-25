import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponet';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListProductComponent from './components/ListProductComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponet';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import CreateProductComponent from './components/CreateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          
          <Routes>
           
          <Route path="/" element={<ListEmployeeComponent/>} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
            </Routes>
            <Routes>
            <Route path="/" element={<ListProductComponent />} />
            <Route path="/products" element={<ListProductComponent />} />
            <Route path="/add-product/:id" element={<CreateProductComponent />} />
            <Route path="/view-product/:id" element={<ViewProductComponent />} />
            <Route path="/update-product/:id" element={<UpdateProductComponent />} />
            </Routes>
         
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}
export default App;

